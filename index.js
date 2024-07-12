const express = require("express");
const session = require("express-session");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const apiRouter = require("./routes/api");
const passport = require("./config/passport");

const port = 3000;
const app = express();

app.set("view engine", "ejs");

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "abc123", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/api", apiRouter);

app.get("/", (req, res) => res.end("Hello"));

app.listen(port, () => console.log("http://localhost:" + port));
