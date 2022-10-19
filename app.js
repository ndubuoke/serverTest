import dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import { successResMsg } from "./utils/response.js";

const app = express();

// CORS
app.use(cors());

// MIDDLEWARES
app.use(helmet());
app.use(logger("dev"));
app.use(json({ limit: "200mb" }));
app.use(urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));
// Default Route
app.get("/", (req, res) => {
  return successResMsg(res, 200, {
    message: "Ok 👍",
  });
});

// Routes
import routes from "./routes/index.js";

// ************ REGISTER ROUTES HERE ********** //
routes(app);
// ************ END ROUTES REGISTRATION ********** //

// Global error handler
// app.use();

export default app;
