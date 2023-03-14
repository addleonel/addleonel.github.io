import React from "react";
import { CodeBlock } from "react-code-blocks";
import { Helmet } from "react-helmet";
// styles
import "../../assets/styles/components/PostContent.scss";

const PostContent: React.FC = () => {
  const language: string = "python";
  const themecolor: string = "tomorrowNightBright";
  const showLineNumbers = false;
  const startingLineNumber: number = 1;
  const wrapLines: Boolean = true;
  return (
    <React.Fragment>
      <Helmet>
        <title>Full-Text Search | Django | Postgres</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <img
                className="post-image"
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <h2>Full-Text Search | Django | Postgres</h2>
              <p className="post-meta-inside">Posted On June 5, 2021</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <section className="post-content">
              <h3>What is Full-Text Search?</h3>
              <p>
                {" "}
                <a
                  className="link-text mark-text"
                  rel="noreferrer"
                  target="_blank"
                  href="http://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.sqlanywhere.12.0.1/dbusage/full-text-search-what-is-it.html"
                >
                  Full-text search
                </a>
                refers to techniques for searching a single computer-stored
                document or a collection in a full-text database. Full-text
                search is distinguished from searches based on metadata or on
                parts of the original texts represented in databases (such as
                titles, abstracts, selected sections, or bibliographical
                references).
              </p>
              <h3>PostgresSQL Support</h3>
              <p>
                PostgreSQL has its own full-text search implementation built-in.
                While not as powerful as some other search engines, it has the
                advantage of being inside your database and so can easily be
                combined with other relational queries such as categorization.
              </p>
              <p>
                The database functions in the django.contrib.postgres.search
                module ease the use of PostgreSQL’s full text search engines.
              </p>
              <p>
                For use this tools is most easily to setup an example with a
                simple app into Django
              </p>
              <p>
                Read more about{" "}
                <a
                  className="link-text mark-text"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/"
                >
                  postgresSQL support
                </a>
              </p>
              <h3>Create a Model</h3>
              <figure>
                <pre>
                  <code>
                    <CodeBlock
                      text={`
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
                            `}
                      language={language}
                      showLineNumbers={showLineNumbers}
                      theme={themecolor}
                      startingLineNumber={startingLineNumber}
                      wrapLines={wrapLines}
                    />
                  </code>
                </pre>
              </figure>
              <h3>Create view function-based (in this case)</h3>
              <p>Inside to views.py</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
def search(request):
    pass
                            `}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <p>For now, this is basically the begin</p>
              <h3>View’s URL</h3>
              <p>Inside to urls.py</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
# django 
from django.urls import path
# project 
from .views import search

urlpatterns = [
    path('search', search, name='search'),
]`}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <h3>Create View Template</h3>
              <p>Into search.html file</p>

              <pre>
                <code>
                  <CodeBlock
                    text={`
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
{% endfor %}`}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <p>
                Now into search-form.html, we are going to create the form to
                actions the search view
              </p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
<form action="{% url 'search' %}" method="GET">
    <input name="q" type="text" placeholder="Search">
    <button>Search</button>
</form>`}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>

              <h3>SearchVector Implementation</h3>
              <p>How to use:</p>

              <pre>
                <code>
                  <CodeBlock
                    text={`
>>> from django.contrib.postgres.search import SearchVector
>>> Entry.objects.annotate(
...     search=SearchVector('body_text', 'blog__tagline'),
... ).filter(search='Cheese')
[<Entry: Cheese on Toast recipes>, <Entry: Pizza Recipes>]
                                `}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <p>
                For more information about{" "}
                <a
                  className="link-text mark-text"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchvector"
                >
                  SearchVector
                </a>
                .
              </p>
              <p>Now in our view code that we created above.</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
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
    )`}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <h3>SearchQuery Implementation</h3>
              <p>How to use:</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
>>> from django.contrib.postgres.search import SearchQuery
>>> SearchQuery('red tomato')  # two keywords
>>> SearchQuery('tomato red')  # same results as above
>>> SearchQuery('red tomato', search_type='phrase')  # a phrase
>>> SearchQuery('tomato red', search_type='phrase')  # a different phrase
>>> SearchQuery("'tomato' & ('red' | 'green')", search_type='raw')  # boolean operators
>>> SearchQuery("'tomato' ('red' OR 'green')", search_type='websearch')  # websearch operators
                                `}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <p>
                For more information about{" "}
                <a
                  className="link-text mark-text"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchquery"
                >
                  SearchQuery
                </a>
                .
              </p>
              <p>Now in our view code that we created above</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
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
                                    `}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <h3>SearchRank Implementation</h3>
              <p>How to use:</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
>>> from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
>>> vector = SearchVector('body_text')
>>> query = SearchQuery('cheese')
>>> Entry.objects.annotate(rank=SearchRank(vector, query)).order_by('-rank')
[<Entry: Cheese on Toast recipes>, <Entry: Pizza recipes>]
                                `}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <p>
                For more information about{" "}
                <a
                  className="link-text mark-text"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#searchrank"
                >
                  SearchRank
                </a>
                .
              </p>
              <p>Now in our view code that we created above</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
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
return render(request, 'search/search.html', context)`}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <h3>Search View Class-Based</h3>
              <p>The same search view, now with class:</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
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

        return render(request, self.template_name, context)`}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <p>Then change the url.py path:</p>
              <pre>
                <code>
                  <CodeBlock
                    text={`
# django 
from django.urls import path
# project 
from .views import SearchEntityView

urlpatterns = [
    path('search', SearchEntityView.as_view(), name='search'),
]`}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    theme={themecolor}
                    startingLineNumber={startingLineNumber}
                    wrapLines={wrapLines}
                  />
                </code>
              </pre>
              <p>
                If you want to read yourself from the{" "}
                <a
                  className="link-text mark-text"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.djangoproject.com/en/3.2/ref/contrib/postgres/search/#full-text-search"
                >
                  Django docs
                </a>{" "}
                just do it.
              </p>
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default PostContent;
