import formControlPropertyRouter from "./form-control-property/index.js";
import formControlRouter from "./form-control/index.js";
import formRouter from "./form/index.js";
import formBehavioursDataRouter from "./form-behaviours-data/index.js";

export default (app) => {
  app.use("/v1/form-control-property", formControlPropertyRouter); // Form control property router
  app.use("/v1/form-control", formControlRouter); // Form control router
  app.use("/v1/form", formRouter); // Form  router
  app.use("/v1/form-behaviours-data", formBehavioursDataRouter); // Form behaviours data router
};
