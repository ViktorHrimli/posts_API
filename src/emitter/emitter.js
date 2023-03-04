const Emitter = require("events");

const emitter = new Emitter();

emitter.on("message", (data, second) => {
  console.log(data);
  console.log(second);
});

const MESSAGE = process.env.MESSAGE;

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 21315);
} else {
  emitter.emit("message", "FILED", false);
}
