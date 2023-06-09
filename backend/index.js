const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
const cookieParser = require("cookie-parser");
const favicon = require("serve-favicon");
const path = require("path");
const fs = require("fs");
const exphbs = require("express-handlebars");
const fileupload = require("express-fileupload");

const { config } = require("./configs/config");

//CORS policy configuration
const corsOptions = {
  // origin: 'https://app.smarttaps.co',
  origin: 'http://localhost:3421',
  credentials: true,
};
app.use(cors(corsOptions));

// body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Cookie-parser
app.use(cookieParser());

app.use(fileupload());

// Returns a middleware to serve favicon
app.use(favicon(__dirname + "/favicon.png"));
// Pass the global passport object into the configuration function
require("./configs/passport")(passport);
// This will initialize the passport object on every request
app.use(passport.initialize());

//Set template engine
// app.engine('handlebars', engine());
var hbs = exphbs.create({
  helpers: {
    eq: function (arg1, arg2, options) {
      return arg1 == arg2 ? options.fn(this) : options.inverse(this);
    },
    neq: function (arg1, arg2, options) {
      return arg1 == arg2 ? options.inverse(this) : options.fn(this);
    },
  },
  defaultLayout: "main",
  partialsDir: ["views/partials/"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

//Route definitions
app.get("/", function (req, res) {
  res.send({ status: "success" });
});

//Serve static images
app.use('/static', express.static('public'))

//Upload profile image file
app.post("/upload", (req, res) => {
  const newpath = __dirname + "/public/images/profiles/";
  const file = req.files.file;
  const filename = req.body.fileName;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log('err: ' + err);
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});

//Upload QR image file
app.post("/uploadqr", (req, res) => {
  const newpath = __dirname + "/public/images/qr/";
  const file = req.files.file;
  const filename = req.body.fileName;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log('err: ' + err);
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});

// Imports all of the routes from ./routes/index.js
app.use(require("./src/routes"));

//Start the server in port defined in config
const server = app.listen(process.env.PORT || config.PORT, function () {
    const port = server.address().port;
    console.log("App started with nodemon at port:", port);
  });
  