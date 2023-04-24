"use strict";
var Emitter = require("events");
var emitter = new Emitter();
emitter.on("message", function (data, second) {
    console.log(data);
    console.log(second);
});
var MESSAGE = process.env.MESSAGE;
if (MESSAGE) {
    emitter.emit("message", MESSAGE, 21315);
}
else {
    emitter.emit("message", "FILED", false);
}
