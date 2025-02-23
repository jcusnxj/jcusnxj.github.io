---
layout: base
---
<section class="blog-feed">
{% set navPages = collections.post | reverse %}

{% for item in navPages %}
<article class="blog-post">
<h2 class="post-title line"><a href="{{ item.url }}">{{ item.data.title }}</a></h2>
<p class="post-date">{{ item.data.date | dateObject("LLL d, yyyy") }}</p>
{% if item.data.smallPictures %}
<a href="{{ item.url }}"><img class="post-picture" src="{{ item.data.smallPictures[0] }}" alt="{{ item.data.title }}"></a>
<p class="post-excerpt">{{ item.page.excerpt }}</p>
{% else %}
<p class="post-excerpt">{{ item.page.excerpt }}</p>
{% endif %}
</article>
{% endfor %}
</section>



