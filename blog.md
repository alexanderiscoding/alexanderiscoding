<h2 class="post-list-heading">Blog</h2>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%B %Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h3>
    </li>
  {% endfor %}
</ul>
