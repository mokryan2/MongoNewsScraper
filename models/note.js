// Require Mongoose
const mongoose = require("mongoose");

// Create schema using methods from mongoose
const Schema = mongoose.Schema;

// Create noteSchema
const noteSchema = new Schema({
    _articleId: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    },
    date:{
        type: Date,
        default: Date.now
    },
    noteText: String
});

// Create model based on noteSchema
const Note = mongoose.model("Note", noteSchema);

// Export
module.exports = Note;
