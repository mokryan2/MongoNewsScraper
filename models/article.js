// Require Mongoose
const mongoose = require("mongoose");

// Create schema using methods from mongoose
const Schema = mongoose.Schema;

// Create ArticleSchema
const articleSchema = new Schema({
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
const Article = mongoose.model("Article", articleSchema);

// Export
module.exports = Article;
