---
layout: page
title: Blog
---

<section class="container content-section">
  <h2 class="alt-h2 text-center mb-3">Blog</h2>
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: '%d/%m/%Y' }}</span>
        <h3>
          <a class="post-link" href="{{ post.url }}">
            {{ post.title }}
          </a>
        </h3>
      </li>
    {% endfor %}
  </ul>
</section>
