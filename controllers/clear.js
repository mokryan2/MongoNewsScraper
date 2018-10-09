// Import Models
const db = require("../models");

module.exports = {
    clearDB: (req, res) => {
        db.Article.remove({})
            .then(() => {
                return db.Note.remove({});
            })
            .then(() => {
                res.json({ ok: true });
            })
    }
};
