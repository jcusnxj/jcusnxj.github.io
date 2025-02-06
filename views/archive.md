---
title: Archive
layout: base
tags: page
eleventyNavigation:
  key: Archive
  parent: jcusnxj
  order: 1
---
## 2025
{% set postPages = collections.post2025 | reverse %}

{% for post in postPages %}
<div class="archive">
<p class="archive-date">{{ post.data.date | dateObject("LLL d") }}</p>
<a href="{{ post.url }}" class="">{{ post.data.title }}</a>
</div>
{% endfor %}

## 2024

{% set postPages = collections.post2024 | reverse %}

{% for post in postPages %}
<div class="archive">
<p class="archive-date">{{ post.data.date | dateObject("LLL d") }}</p>
<a href="{{ post.url }}" class="">{{ post.data.title }}</a>
</div>
{% endfor %}