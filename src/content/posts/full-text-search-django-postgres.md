---
title: "Full-Text Search | Django | Postgres"
date: "June 5, 2021"
cover: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
description: "Full-text search refers to techniques for searching a single computer-stored document or a collection in a full-text database ..."
locale: "en"
slug: "full-text-search-django-postgres"
---

## What is Full-Text Search?

[Full-text search](http://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.sqlanywhere.12.0.1/dbusage/full-text-search-what-is-it.html) refers to techniques for searching a single computer-stored document or a collection in a full-text database. Full-text search is distinguished from searches based on metadata or on parts of the original texts represented in databases (such as titles, abstracts, selected sections, or bibliographical references).

## PostgresSQL Support

PostgreSQL has its own full-text search implementation built-in. While not as powerful as some other search engines, it has the advantage of being inside your database and so can easily be combined with other relational queries such as categorization.

The database functions in the django.contrib.postgres.search module ease the use of PostgreSQL's full text search engines.

For use this tools is most easily to setup an example with a simple app into Django

Read more about [postgresSQL support](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/)

## Create a Model

```python
from django.db import models

class Entity(models.Model):

    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=300)
    city = models.CharField(max_length=300)
    country = models.CharField(max_length=300)
    url = models.URLField(max_length=400, blank=True)
    apply = models.BooleanField(default=False)
    description = models.TextField(blank=False)

    def __str__(self):
        return self.name
```

## Create view function-based (in this case)

Inside to views.py

```python
def search(request):
    pass
```

For now, this is basically the begin

## View's URL

Inside to urls.py

```python
# django
from django.urls import path
# project
from .views import search

urlpatterns = [
    path('search', search, name='search'),
]
```

## Create View Template

Into search.html file

```python
{# This will be explain after #}
{{ count_filters }}
{% for entity in entities_filtered %}
<p>{{ entity.name }}</p>
<p>{{ entity.email }}</p>
<p>{{ entity.city }}</p>
<p>{{ entity.country }}</p>
<p>{{ entity.url }}</p>
<p>{{ entity.apply }}</p>
<p>{{ entity.description}}</p>
{% endfor %}
```

Now into search-form.html, we are going to create the form to actions the search view

```html
<form action="{% url 'search' %}" method="GET">
    <input name="q" type="text" placeholder="Search">
    <button>Search</button>
</form>
```

## SearchVector Implementation

How to use:

```python
>>> from django.contrib.postgres.search import SearchVector
>>> Entry.objects.annotate(
...     search=SearchVector('body_text', 'blog__tagline'),
... ).filter(search='Cheese')
[<Entry: Cheese on Toast recipes>, <Entry: Pizza Recipes>]
```

For more information about [SearchVector](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchvector).

Now in our view code that we created above.

```python
from django.contrib.postgree.search import SearchVector

def search(request):

    # Here we get the value of the search field from the template
    q = request.GET.get('q', '').strip()

    # Here we are going to type the principal attributes
    # that we want to search in the search field form
    # in this case are: name, city, country, description,
    # and created_at
    entity_vector = SearchVector(
        'name', 'city', 'country', 'description', 'created_at'
    )
```

## SearchQuery Implementation

How to use:

```python
>>> from django.contrib.postgres.search import SearchQuery
>>> SearchQuery('red tomato')  # two keywords
>>> SearchQuery('tomato red')  # same results as above
>>> SearchQuery('red tomato', search_type='phrase')  # a phrase
>>> SearchQuery('tomato red', search_type='phrase')  # a different phrase
>>> SearchQuery("'tomato' & ('red' | 'green')", search_type='raw')  # boolean operators
>>> SearchQuery("'tomato' ('red' OR 'green')", search_type='websearch')  # websearch operators
```

For more information about [SearchQuery](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchquery).

Now in our view code that we created above

```python
from django.contrib.postgree.search import (SearchVector,
    SearchQuery
)

def search(request):

    # Here we get the value of the search field from the template
    search_field_query = request.GET.get('q', '').strip()

    # Here we are going to type the principal attributes
    # that we want to search in the search field form
    # in this case are: name, city, country, description,
    # and created_at
    entity_vector = SearchVector(
        'name', 'city', 'country', 'description', 'created_at'
    )

    # Here we just pass the value of the search field query
    entity_query = SearchQuery(search_field_query)
```

## SearchRank Implementation

How to use:

```python
>>> from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
>>> vector = SearchVector('body_text')
>>> query = SearchQuery('cheese')
>>> Entry.objects.annotate(rank=SearchRank(vector, query)).order_by('-rank')
[<Entry: Cheese on Toast recipes>, <Entry: Pizza recipes>]
```

For more information about [SearchRank](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchrank).

Now in our view code that we created above

```python
from django.shortcuts import render
from django.contrib.postgree.search import (SearchVector,
SearchQuery
)
from .models import Entity

def search(request):
    # This is to count how many object there are (it's optional)
    count_filters = 0

    # Here we get the value of the search field from the template
    search_field_query = request.GET.get('q', '').strip()

    # Here we are going to type the principal attributes
    # that we want to search in the search field form
    # in this case are: name, city, country, description,
    # and created_at
    entity_vector = SearchVector(
        'name', 'city', 'country', 'description', 'created_at'
    )

    # Here we just pass the value of the search field query
    entity_query = SearchQuery(search_field_query)

    # Here we pass the entity_vector and entity_query
    entities_filtered = Entity.objects.annotate(
        rank=SearchRank(entity_vector, entity_query)
    ).order_by('-rank')

    # count filters
    count_filters += entities_filtered.count()

    # Now We are going to create the context dictionary
    context = {
        'entities_filtered': entities_filtered,
        'count_filters': count_filters,
    }

    # Now we are going to complete with our view
    return render(request, 'search/search.html', context)
```

## Search View Class-Based

The same search view, now with class:

```python
from django.shortcuts import render
from django.views import View
from django.contrib.postgree.search import (SearchVector,
    SearchQuery
)
from .models import Entity

class SearchEntityView(View):
    template_name = 'search/search.html'

    def get(self, request, *args, **kwargs):
        count_filters = 0

        search_field_query = request.GET.get('q', '').strip()

        entity_vector = SearchVector(
            'name', 'city', 'country', 'description', 'created_at'
        )

        entity_query = SearchQuery(search_field_query)

        entities_filtered = Entity.objects.annotate(
            rank=SearchRank(entity_vector, entity_query)
        ).order_by('-rank')

        count_filters += entities_filtered.count()

        context = {
            'entities_filtered': entities_filtered,
            'count_filters': count_filters,
        }

        return render(request, self.template_name, context)
```

Then change the url.py path:

```python
# django
from django.urls import path
# project
from .views import SearchEntityView

urlpatterns = [
    path('search', SearchEntityView.as_view(), name='search'),
]
```

If you want to read yourself from the [Django docs](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#full-text-search) just do it.
