const router = require("express").Router();
const fetchRoutes = require("./fetch");
const noteRoutes = require("./notes");
const articleRoutes = require("./articles");
const clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/articles", articleRoutes);
router.use("/clear", clearRoutes);

module.exports = router;
