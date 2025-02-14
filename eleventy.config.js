import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { DateTime } from "luxon";
import 'dotenv/config'
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");

    // PLUGINS
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "post", // iterate over `collections.posts`
            limit: 10,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "jcusnxj",
            subtitle: "A personal website built in 11ty.",
            base: "https://jcusnxj.net/",
            author: {
                name: "František Müller",
                email: "", // Optional
            }
        }
    });

    // EXCERPTS
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->",
    });

    //SHORTCODES
    // get the current year
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`); //import DateTime from luxon

    //FILTERS
    //luxon date filter (for JavaScript Date object)
    eleventyConfig.addFilter("dateObject", (dateObj, format = "LLL d") => {
        return DateTime.fromJSDate(dateObj).toFormat(format);
    });

    //luxon date filter (for ISO 8601 date strings)
    eleventyConfig.addFilter("dateString", (dateObj, format = "LLL d") => {
        return DateTime.fromISO(dateObj).toFormat(format);
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