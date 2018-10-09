// Requrie axios/cheerio
const axios = require("axios");
const cheerio = require("cheerio");

// Scrape function
var scrape = () => {
    return axios.get("https://www.npr.org/sections/news/").then((res) => {
        var $ = cheerio.load(res.data);

        var articles = [];

        $("article.item").each((i, element) => {

            var title = $(element).find("h2").children().text();
            var link = $(element).find("a").attr("href");
            var summary = $(element).find("p").text().trim();

            if (summary) {
                var summaryClean = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            }

            var dataToAdd = {
                title: title,
                link: link,
                summary: summaryClean
            }

            // Save these results in an object that we'll push into the results array we defined earlier
            articles.push({ dataToAdd });
        });

        // Log the results once you've looped through each of the elements found with cheerio
        return articles;
    });
};
module.exports = scrape;
