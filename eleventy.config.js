import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { DateTime } from "luxon";
import 'dotenv/config'

export default function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");

    // PLUGINS
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // EXCERPTS
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->",
    });

    //FILTERS
    //withinDateRange (for running log - daily)
    eleventyConfig.addFilter("withinDateRange", (dateStr, startDateStr, endDateStr) => {
        const date = new Date(dateStr);
        const startDate = new Date(startDateStr);
        const endDate = new Date(endDateStr);
        return date >= startDate && date <= endDate;
    });

    //luxon date filter (for JavaScript Date object)
    eleventyConfig.addFilter("dateObject", (dateObj, format = "LLL d") => {
        return DateTime.fromJSDate(dateObj).toFormat(format);
    });

    //luxon date filter (for ISO 8601 date strings)
    eleventyConfig.addFilter("dateString", (dateObj, format = "LLL d") => {
        return DateTime.fromISO(dateObj).toFormat(format);
    });

    // converts data into string (for daily workouts summary)
    eleventyConfig.addFilter("date", (date, format) => {
        return DateTime.fromJSDate(date).toFormat(format);
      });

};

export const config = {

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
        input: "views",
        layouts: "_layouts",
        output: "dist"
    }
};