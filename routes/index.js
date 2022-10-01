import formControlPropertyRouter from "./form-control-property/index.js";

export default (app) => {
  app.use("/v1/form-control-property", formControlPropertyRouter); // Example
};
