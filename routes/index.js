const { Router } = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("users");

const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { ensureSingup, ensureNewUser } = require("../middleware/user");

const router = new Router();

router.get("/", ensureGuest, (req, res) => {
  res.render("login");
});

router.get("/signup", ensureAuth, ensureNewUser, (req, res) => {
  res.render("signup");
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

router.patch(
  "/user/update/role",
  ensureAuth,
  ensureNewUser,
  async (req, res) => {
    try {
      const { role } = req.body;
      const user = req.user;

      user.role = Number(role);
      await user.save();

      res.status(200).send({});
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "something went wrong" });
    }
  }
);

router.get("/dashboard", ensureAuth, ensureSingup, (req, res) => {
  res.send("<h1>Welcome to LearnFlow</h1>");
});

module.exports = router;
