---
title: "Busqueda de Texto Completo | Django | Postgres"
date: "5 de Junio, 2021"
cover: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
description: "La busqueda de texto completo se refiere a tecnicas para buscar en un documento almacenado o en una coleccion en una base de datos de texto completo ..."
locale: "es"
slug: "full-text-search-django-postgres"
---

## Que es la Busqueda de Texto Completo?

La [busqueda de texto completo](http://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.sqlanywhere.12.0.1/dbusage/full-text-search-what-is-it.html) se refiere a tecnicas para buscar en un documento almacenado en una computadora o en una coleccion en una base de datos de texto completo. La busqueda de texto completo se distingue de las busquedas basadas en metadatos o en partes de los textos originales representados en bases de datos (como titulos, resumenes, secciones seleccionadas o referencias bibliograficas).

## Soporte de PostgreSQL

PostgreSQL tiene su propia implementacion de busqueda de texto completo incorporada. Aunque no es tan poderosa como otros motores de busqueda, tiene la ventaja de estar dentro de tu base de datos y por lo tanto puede combinarse facilmente con otras consultas relacionales como la categorizacion.

Las funciones de base de datos en el modulo django.contrib.postgres.search facilitan el uso de los motores de busqueda de texto completo de PostgreSQL.

Para usar estas herramientas es mas facil configurar un ejemplo con una aplicacion simple en Django.

Lee mas sobre el [soporte de PostgreSQL](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/)

## Crear un Modelo

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

## Crear vista basada en funciones (en este caso)

Dentro de views.py

```python
def search(request):
    pass
```

Por ahora, esto es basicamente el inicio.

## URL de la Vista

Dentro de urls.py

```python
# django
from django.urls import path
# proyecto
from .views import search

urlpatterns = [
    path('search', search, name='search'),
]
```

## Crear Plantilla de Vista

En el archivo search.html

```python
{# Esto se explicara despues #}
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

Ahora en search-form.html, vamos a crear el formulario para accionar la vista de busqueda

```html
<form action="{% url 'search' %}" method="GET">
    <input name="q" type="text" placeholder="Buscar">
    <button>Buscar</button>
</form>
```

## Implementacion de SearchVector

Como usarlo:

```python
>>> from django.contrib.postgres.search import SearchVector
>>> Entry.objects.annotate(
...     search=SearchVector('body_text', 'blog__tagline'),
... ).filter(search='Cheese')
[<Entry: Cheese on Toast recipes>, <Entry: Pizza Recipes>]
```

Para mas informacion sobre [SearchVector](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchvector).

Ahora en el codigo de nuestra vista que creamos anteriormente.

```python
from django.contrib.postgree.search import SearchVector

def search(request):

    # Aqui obtenemos el valor del campo de busqueda desde la plantilla
    q = request.GET.get('q', '').strip()

    # Aqui vamos a escribir los atributos principales
    # que queremos buscar en el campo de busqueda del formulario
    # en este caso son: name, city, country, description,
    # y created_at
    entity_vector = SearchVector(
        'name', 'city', 'country', 'description', 'created_at'
    )
```

## Implementacion de SearchQuery

Como usarlo:

```python
>>> from django.contrib.postgres.search import SearchQuery
>>> SearchQuery('red tomato')  # dos palabras clave
>>> SearchQuery('tomato red')  # mismos resultados que arriba
>>> SearchQuery('red tomato', search_type='phrase')  # una frase
>>> SearchQuery('tomato red', search_type='phrase')  # una frase diferente
>>> SearchQuery("'tomato' & ('red' | 'green')", search_type='raw')  # operadores booleanos
>>> SearchQuery("'tomato' ('red' OR 'green')", search_type='websearch')  # operadores websearch
```

Para mas informacion sobre [SearchQuery](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchquery).

Ahora en el codigo de nuestra vista que creamos anteriormente

```python
from django.contrib.postgree.search import (SearchVector,
    SearchQuery
)

def search(request):

    # Aqui obtenemos el valor del campo de busqueda desde la plantilla
    search_field_query = request.GET.get('q', '').strip()

    # Aqui vamos a escribir los atributos principales
    # que queremos buscar en el campo de busqueda del formulario
    # en este caso son: name, city, country, description,
    # y created_at
    entity_vector = SearchVector(
        'name', 'city', 'country', 'description', 'created_at'
    )

    # Aqui simplemente pasamos el valor de la consulta del campo de busqueda
    entity_query = SearchQuery(search_field_query)
```

## Implementacion de SearchRank

Como usarlo:

```python
>>> from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
>>> vector = SearchVector('body_text')
>>> query = SearchQuery('cheese')
>>> Entry.objects.annotate(rank=SearchRank(vector, query)).order_by('-rank')
[<Entry: Cheese on Toast recipes>, <Entry: Pizza recipes>]
```

Para mas informacion sobre [SearchRank](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchrank).

Ahora en el codigo de nuestra vista que creamos anteriormente

```python
from django.shortcuts import render
from django.contrib.postgree.search import (SearchVector,
SearchQuery
)
from .models import Entity

def search(request):
    # Esto es para contar cuantos objetos hay (es opcional)
    count_filters = 0

    # Aqui obtenemos el valor del campo de busqueda desde la plantilla
    search_field_query = request.GET.get('q', '').strip()

    # Aqui vamos a escribir los atributos principales
    # que queremos buscar en el campo de busqueda del formulario
    # en este caso son: name, city, country, description,
    # y created_at
    entity_vector = SearchVector(
        'name', 'city', 'country', 'description', 'created_at'
    )

    # Aqui simplemente pasamos el valor de la consulta del campo de busqueda
    entity_query = SearchQuery(search_field_query)

    # Aqui pasamos el entity_vector y entity_query
    entities_filtered = Entity.objects.annotate(
        rank=SearchRank(entity_vector, entity_query)
    ).order_by('-rank')

    # contar filtros
    count_filters += entities_filtered.count()

    # Ahora vamos a crear el diccionario de contexto
    context = {
        'entities_filtered': entities_filtered,
        'count_filters': count_filters,
    }

    # Ahora vamos a completar nuestra vista
    return render(request, 'search/search.html', context)
```

## Vista de Busqueda Basada en Clases

La misma vista de busqueda, ahora con clase:

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

Luego cambia la ruta en url.py:

```python
# django
from django.urls import path
# proyecto
from .views import SearchEntityView

urlpatterns = [
    path('search', SearchEntityView.as_view(), name='search'),
]
```

Si quieres leer tu mismo desde la [documentacion de Django](https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#full-text-search) simplemente hazlo.
