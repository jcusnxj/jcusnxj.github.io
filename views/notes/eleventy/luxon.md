---
title: luxon
eleventyNavigation:
  key: luxon
  parent: Eleventy
---
### Sources
- [11ty Date Shortcodes and Filters](https://11ty.rocks/eleventyjs/dates/) 
- [Official Documentation](https://moment.github.io/luxon/)

### Installation

```bash
npm install --save luxon
```

### Configuration

`/eleventy.config.js`

```js
import { DateTime } from "luxon";

export default function(eleventyConfig) {
	// Configure Eleventy
};
```

### Usage - shortcode to get the current year

`/eleventy.config.js`

```js
export default function(eleventyConfig) {
	
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};
```

`/views/_layouts/base.njk`

```html
<footer>
    &copy; {% year %} jcusnxj.net
</footer>
```

### Usage - filter to format dates

`/eleventy.config.js`

```js
export default function(eleventyConfig) {
	
  eleventyConfig.addFilter("postDate", (dateObj, format = "LLL d") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });
};
```

`/views/example.md`

```njk
{{ date | postDate("LLL d, yyyy") }} 
```

```njk
{{ date | postDate }}  
```

- The supported tokens (e.g. "LLL d, yyyy") can be found in [official documentation](https://moment.github.io/luxon/?id=/formatting?id=toformat#/formatting?id=table-of-tokens).

