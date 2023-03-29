const router = require("express").Router();
const api = require("./api/index");
const homeRoutes = require("./home");

router.use("/", homeRoutes);
router.use("/api", api);

router.get("*", async (req, res) => {
  res.render("404");
});
module.exports = router;
