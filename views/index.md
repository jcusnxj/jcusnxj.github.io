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
<h2 class="post-title"><a href="{{ item.url }}">{{ item.data.title }}</a></h2>
<p class="post-date">{{ item.data.date | dateObject("LLL d, yyyy") }}</p>
<p class="post-excerpt">{{ item.page.excerpt }}</p>
{% endfor %}
</section>