import formControlPropertyRouter from "./form-control-property/index.js";
import formControlRouter from "./form-control/index.js";

export default (app) => {
  app.use("/v1/form-control-property", formControlPropertyRouter); // Form control property router
  app.use("/v1/form-control", formControlRouter); // Form control router
};
