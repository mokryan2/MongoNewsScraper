// Import Models
const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Article.find(req.query).sort({ date: -1 })
            .then((dbArticle) => {
                res.json(dbArticle)
            });
    },
    delete: (req, res) => {
        db.Article.remove({ _id: req.params.id })
            .then((dbArticle) => {
                res.json(dbArticle)
            });
    },
    update: (req, res) => {
        db.Article.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
            .then((dbArticle) => {
                res.json(dbArticle)
            });
    }
};
