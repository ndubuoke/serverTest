import sampleRouter from "./sample/index.js";

export default (app) => {
  app.use("/v1/sample", sampleRouter); // Example
};
