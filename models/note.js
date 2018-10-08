// Require Mongoose
var mongoose = require("mongoose");

// Create schema using methods from mongoose
var Schema = mongoose.Schema;

// Create noteSchema
var noteSchema = new Schema({
    _articleId: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    },
    date:{
        type: Date,
        default: Date.now
    },
    note: String
});

// Create model based on noteSchema
var Note = mongoose.model("Note", noteSchema);

// Export
module.exports = Note;
