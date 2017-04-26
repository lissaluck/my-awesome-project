var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 5000;
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/project", require("./routes/projectRoutes"));

mongoose.connect("mongodb://localhost/yarn-yardage", function (err) {
    if (err) throw err;
    console.log("Connected to the database");
});

app.listen(port, function() {
    console.log("Server is running on port " + port);
});

/**
 * Created by lissaluck on 3/2/17.
 */
