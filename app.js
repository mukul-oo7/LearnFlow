const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");


const app = express();
const PORT = 3000;

connectDb();

require("./models/User");
require("./models/Post");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.use(
    session({
        secret: "mysecretkey",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/index"));
app.use("/post", require("./routes/post"));

app.listen(PORT, ()=> {
    console.log(`Server is runnig on port ${PORT}`);
});