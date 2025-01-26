---
title: Google Sheets API
eleventyNavigation:
  key: Google Sheets API
  parent: Eleventy
---
### Sources
- [ChatGPT](https://chatgpt.com)

### Enable Google Sheets API

- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create new project or use existing one
- In the project navigate to **_APIs & Services > Credentials_**
- Click on **_Create Credentials_** and select **_API key_** option
- Edit newly created API key and in **_API Restriction_** section select **_Restrict key_** and then **_Google Sheets API_**

### Google Sheet access rights

- Make your google sheet accessible by _Anyone with the link_

### googleapis library

```bash
npm install googleapis
```

### Fetch data from Google Sheets
_An example of code retrieving data (for each row it fetches data in columns A - C) from two different sheets in single spreadsheet._

`/_data/google.js`

```js
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

export default async function () {
    const sheets = google.sheets('v4');
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range1 = 'log!A:C'; 
    const range2 = 'monthly!A:C';  

    if (!apiKey || !sheetId) {
        throw new Error("Missing required environment variables.");
    }

    async function fetchSheetData(range) {
        try {
            const response = await sheets.spreadsheets.values.get({
                key: apiKey,
                spreadsheetId: sheetId,
                range,
            });

            const rows = response.data.values;

            if (!rows || rows.length === 0) {
                console.log(`No data found for range: ${range}`);
                return [];
            }

            const headers = rows[0];
            const dataRows = rows.slice(1);

            return { headers, dataRows };
        } catch (error) {
            console.error(`Error fetching data for range: ${range}`, error);
            return { headers: [], dataRows: [] };
        }
    }

    const [sheet1, sheet2] = await Promise.all([
        fetchSheetData(range1),
        fetchSheetData(range2),
    ]);

    const workout = sheet1.dataRows.map((row) => ({
        date: row[sheet1.headers.indexOf('date')],
        distance: row[sheet1.headers.indexOf('distance')],
        duration: row[sheet1.headers.indexOf('duration')],
    }));

    const monthly = sheet2.dataRows.map((row) => ({
        month: row[sheet2.headers.indexOf('month')],
        distance: row[sheet2.headers.indexOf('distance')],
        duration: row[sheet2.headers.indexOf('duration')],
    }));

    return { workout, monthly };
}
```

### .env file

- Follow the instructions in [dotenv-package](/note/dotenv-package)
- .env file should contain:

`/.env`

```txt
GOOGLE_SHEETS_API_KEY=your-actual-google-sheets-API-key
GOOGLE_SHEET_ID=actual-google-sheet-id
```

### Scripts in package.json

`/package.json`

```js
"scripts": {
    "running": "node scripts/google-sheets.js"
  },
```

### Usage

```html
<ul>
  {% for item in google.workout %}
    <li>{{ item.date }} - {{ item.distance }} km</li>
  {% endfor %}
</ul>
```


