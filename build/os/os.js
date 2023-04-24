"use strict";
var os = require("os");
var cluster = require("cluster");
var cpus = os.cpus();
if (cluster.isMaster) {
    for (var i = 0; i < cpus.length - 3; i++) {
        cluster.fork();
        cluster.on("exit", function (worked) {
            console.log("Procces id is dead ".concat(worked));
            cluster.fork();
        });
    }
}
else {
    console.log("Procces id ".concat(process.pid, " entered"));
    setInterval(function () {
        console.log("Procces id is worked ".concat(process.pid));
    }, 5000);
}
