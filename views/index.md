---
title: jcusnxj
layout: base
tags: page
eleventyNavigation:
  key: jcusnxj
---
<section class="blog-feed">
{% set navPages = collections.post | reverse %}
{% for item in navPages %}
<a class="post-title" href="{{ item.url }}">{{ item.data.title }}</a>
<p class="post-date">{{ item.data.date | dateObject("LLL, yyyy") }}</p>
<p class="post-excerpt">{{ item.page.excerpt }}</p>
{% endfor %}
</section>