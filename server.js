const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

// Set up Port
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Require Routes
const routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public static
app.use(express.static("public"));

// Connect handlebars to express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have requests go through route
app.use(routes);

// Use deployed database, otherwise use mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to MongoDB
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
});
