const { Router } = require("express");
const passport = require("passport");

const router = new Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    user = req.user;
    if(!(user.role===0 && user.role===1)){
        return res.redirect("/signup");
    }
    
    res.redirect("/dashboard");
  }
);

module.exports = router;
