// Require Mongoose
var mongoose = require("mongoose");

// Create schema using methods from mongoose
var Schema = mongoose.Schema;

// Create ArticleSchema
var articleSchema = new Schema({
    // Title(String) of article is required(Need it!)
    title: {
        type: String,
        required: true
    },
    // Summary(String) of article is required(Need it!)
    summary: {
        type: String,
        required: true
    },
    // Link(String) is required(Need it!)
    link: {
        type: String,
        required: true
    },
    // Saved(Boolean) status for scraper
    saved: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        deafult: Date.now
    }
});

// Creates model based on articleSchema
var Article = mongoose.model("Article", articleSchema);

// Export
module.exports = Article;
