const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var unitRouter = require("./routes/units");
var dataRouter = require("./routes/data");
var assetsDataRouter = require("./routes/assetsData");
var insightsRouter = require("./routes/insights");
var modelRouter = require("./routes/model");
var categoryRouter = require("./routes/category");
var healthScoreRouter = require("./routes/healthScore");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/units/", unitRouter);
app.use("/api/data/", dataRouter);
app.use("/api/assetsData/", assetsDataRouter);
app.use("/api/insights/", insightsRouter);
app.use("/api/model/", modelRouter);
app.use("/api/category/", categoryRouter);
app.use("/api/healthScore/", healthScoreRouter);

const url =
    "mongodb+srv://lucaspuglielli:78qG5Ghp9ppTs15s@tractian0.7i0dj.mongodb.net/tractian?authSource=admin&replicaSet=atlas-zyrq1f-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(
    url,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (!err == null){
        return console.log(err);
        }
    }
);

module.exports = app;
