// Import Models
const db = require("../models");

module.exports = {
    find: (req, res) => {
        db.Note.find({ _articelId: req.params.id })
            .then((dbNote) => {
                res.json(dbNote)
            })
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
}
