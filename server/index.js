const express = require("express");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const connectDatabase = require("./config/connection");

const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const _dirname = path.resolve();
app.use("uploads", express.static(path.join(_dirname, "uploads")));



const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    cb(null, uuidv4() + "." + file.mimetype.split("/")[1]);
  },
});


var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      // file.mimetype == "image/png" ||
      // file.mimetype == "image/jpg" ||
      // file.mimetype == "image/jpeg" ||
      // file.mimetype == "video/webm" ||
      // file.mimetype == "video/mp4" ||
      // file.mimetype == "video/mav"

      file
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      // return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      return cb(new Error("File is required"));
    }
  },
});

app.use("/uploads", express.static(path.join(_dirname, "uploads")));



// Sign Up


// Form Data

let Article = require("./routes/form/Article");

// app.post("/api/award/create", upload.single("image"), Award.Create);
app.post("/saveArticle", upload.single("image"), Article.save_article);

app.post("/upvoteCounter", Article.upvote_count);

app.post("/CheckIsVoted", Article.isuser_voted);


app.post("/downvoteCounter", Article.downvote_count);


// app.post("/upvoteCounter", Article.upvote_count);

// app.post("/Saveformdata", upload.single("image"), Article.create_form);

// app.post("/update", upload.single("image"), Article.gupdate_form);

// app.post("/deleteidBase", Article.del_form);

app.get("/getArticle", Article.get_article);

// User SignUp

let Authenticate = require("./routes/form/Autherize/autherize");


app.post("/register", Authenticate.register);
app.get("/verify-email", Authenticate.verifyEmail);
app.post("/authenticate", Authenticate.authenticate);
app.post("/forgot-password", Authenticate.forgotPassword);
app.post("/VerifyTokenforpass", Authenticate.verifyCode);

app.post("/resetpassword", Authenticate.resetPassword);

// User SignIn by Auth
// let Signin = require("./routes/form/signIn/signin");
// app.post("/authuserCredentl", Signin.auth_user);


app.use(express.static("./build"));
app.use("*", (req, res) => {
  res.sendFile("./build/index.html");
});

connectDatabase();
const PORT = process.env.PORT || 8072;
app.listen(PORT, function () {
  console.log("server is started on port " + PORT);
});
