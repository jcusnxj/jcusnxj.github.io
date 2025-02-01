---
title: jcusnxj
layout: base
tags: page
eleventyNavigation:
  key: jcusnxj
  order: 1
---
{% set postPages = collections.post | reverse %}
{% for post in postPages %}
<h2><a href="{{ post.url }}" class="post-title">{{ post.data.title }}</a></h2>
<p class="post-date">{{ post.data.date | dateObject("LLL d, yyyy") }}</p>
<p class="post-excerpt">{{ post.data.page.excerpt }}</p>
{% endfor %}