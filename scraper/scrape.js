// Require axios/cheerio
const axios = require("axios");
const cheerio = require("cheerio");

// Scrape function
var scrape = function () {
    return axios.get("https://npr.org/").then(function (res) {
        var $ = cheerio.load(res.data);

        var articles = [];


        $("article").each(function (i, element) {

            var head = $(this)
                .find("h3")
                .text()
                .trim();
            var url = $(this)
                .find("a")
                .attr("href");
            var summary = $(this)
                .find("p")
                .text()
                .trim();

            var dataToAdd = {
                headline: head,
                summary: summary,
                url: url
            };

            //   Save these results in an object that we'll push into the results array we defined earlier
            articles.push(dataToAdd);

        });

        // Log the results once you've looped through each of the elements found with cheerio
        return articles;
    });
};

module.exports = scrape;
