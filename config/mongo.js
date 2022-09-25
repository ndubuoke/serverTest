import mongoose from "mongoose";
import chalk from "chalk";

import { MONGO_URI } from "./config.js";

export const mongoConfig = mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log(
        `${chalk.bgBlue.white("Connected to the MongoDB database!")}`
      );
    },
    (err) => {
      console.log(
        `${chalk.bgRedBright.white("Cannot connect to the MongoDB database!")}`,
        err
      );
      process.exit();
    }
  );
