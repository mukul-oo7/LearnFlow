const ensureSingup = (req, res, next) => {
  const user = req.user;
  if (user.role === 0 || user.role === 1) {
    return next();
  }

  res.redirect("/signup");
};

const ensureNewUser = (req, res, next) => {
  const user = req.user;
  if (!(user.role === 0 || user.role === 1)) return next();

  res.redirect("/dashboard");
};

const ensureCreator = (req, res, next) => {
  const user = req.user;

  if(user===0) return next();
  res.redirect("/dashboard");
}

module.exports = {
  ensureSingup,
  ensureNewUser,
  ensureCreator,
};
