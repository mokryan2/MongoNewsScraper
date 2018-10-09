// Import Models
const db = require("../models");

// Finds/creates/deletes note
module.exports = {
    find: (req, res) => {
        db.Note.find({ _articleId: req.params.id })
            .then((dbNote) => {
                res.json(dbNote)
            });
    },
    create: (req, res) => {
        db.Note.create(req.body)
            .then((dbNote) => {
                res.json(dbNote)
            });
    },
    delete: (req, res) => {
        db.Note.remove({ _id: req.params.id })
        .then((dbNote)=>{
            res.json(dbNote)
        });
    }
};
