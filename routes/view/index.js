const router = require("express").Router();
const db = require("../../models");

// Render the Homepage
router.get("/", (req, res) => {
    db.Article.find({ saved: false })
        .sort({ date: -1 })
        .then((dbArticle) => {
            res.render("home", { articles: dbArticle })
        });
});

// Render saved page
router.get("/saved", (req, res) => {
    db.Article.find({ saved: true })
    .sort({ date: -1 })
    .then((dbArticle) => {
        res.render("saved", { articles: dbArticle })
    });
})

module.exports = router;
