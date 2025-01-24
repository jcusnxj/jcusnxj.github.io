---
title: dotenv package
---
### Sources
- [GitHub Repository](https://github.com/motdotla/dotenv)

### Installation

```bash
npm install dotenv --save
```

### Configuration

`/eleventy.config.js`

```js
import 'dotenv/config'

export default function(eleventyConfig) {

  // you can remove once you validate the variable is part of process.env
  console.log('Google Sheets API Key:', process.env.GOOGLE_SHEETS_API_KEY); 

  return {
    // your eleventy configuration
  };
};
```

### Create .env file

`/.env`

```
GOOGLE_SHEETS_API_KEY=your-actual-google-sheets-API-key 
```

### !!! ADD .env file to .gitignore !!!

`/.gitignore`

```
dist        
node_modules
.DS_Store
.vscode
.env
```

### Set up environment variables in Netlify

- Go to Site settings > Environment variables > Add variable


