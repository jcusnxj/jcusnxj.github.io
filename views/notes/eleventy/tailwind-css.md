---
title: Tailwind CSS
---
### Sources
- [Official Documentation](https://tailwindcss.com/docs/installation)

### Installation (Tailwind CLI tool)

```bash
npm install -D tailwindcss 
```

### Create configuration file - tailwind.config.js

```bash
npx tailwindcss init
```

### Template paths configuration

`/tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Adding the Tailwind directives

`/assets/css/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### Execute Tailwind CLI build process

```html
npx tailwindcss -i ./views/assets/css/tailwind.css -o ./dist/assets/css/style.css
```

### Add Tailwind output file in base layout

`/views/_layouts/base.njk`

```html
<head>
   <link href="/assets/css/style.css" rel="stylesheet"> <!-- replacing the original css file reference-->
</head>
```

### Adjust scripts in package.json

`/package.json`

```js
"scripts": {
    "start": "eleventy --serve & npx tailwindcss -i ./views/assets/css/tailwind.css -o ./dist/assets/css/style.css --watch",
    "build": "eleventy && npx tailwindcss -i ./views/assets/css/tailwind.css -o ./dist/assets/css/style.css --minify"
  }
```
