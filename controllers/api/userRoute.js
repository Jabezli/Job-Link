const router = require("express").Router();
const User = require("../../models/user");

router.get("/users", (req, res) => {
  try {
    User.findAll().then((userData) => {
      res.json(userData);
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
});
router.get("/login", async (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  // Now, we have access to a dish description in the 'dish' template.
  return res.render("login");
});

router.post("/hi", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(404)
        .json({ message: "login failed password or email was incorrect" });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "login failed password or email was incorrect" });
      return;
    }
    res.status(200).json({ message: "logged in worked , You ARE IN!!!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
