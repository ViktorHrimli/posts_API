"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
var app = require("./index");
var _a = process.env, PORT = _a.PORT, DB = _a.DB;
mongoose
    .connect(DB)
    .then(function () {
    app.listen(PORT || 3001, function () {
        console.log("Server running. Use our API on port: ".concat(PORT));
    });
    console.log("Database connection successful");
})
    .catch(function (error) {
    console.log(error.message);
    process.exit(1);
});
