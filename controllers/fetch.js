// Include models and scraper
const db = require("../models");
const scrape = require("../scraper/scrape")

// Scraper function that returns a JSON object
module.exports = {
    scrapeArticles: (req, res) => {
        return scrape()
            .then((articles) => {
                return db.Article.create(articles)
            })
            .then((dbArticle) => {
                if (dbArticle.length === 0) {
                    res.json({
                        message: "No new articles today. Check back later!"
                    });
                }
                else {
                    res.json({
                        message: "Added " + dbArticle.length + " new articles!"
                    });
                }
            })
            .catch((err) => {
                res.json({
                    message: "Finished Scraping!"
                });
            });
    }
};
