const os = require("os");
const cluster = require("cluster");

const cpus = os.cpus();

if (cluster.isMaster) {
  for (let i = 0; i < cpus.length - 3; i++) {
    cluster.fork();
    cluster.on("exit", (worked) => {
      console.log(`Procces id is dead ${worked}`);
      cluster.fork();
    });
  }
} else {
  console.log(`Procces id ${process.pid} entered`);
  setInterval(() => {
    console.log(`Procces id is worked ${process.pid}`);
  }, 5000);
}
