import { Express } from "express";

const app: Express = require("./index");

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
