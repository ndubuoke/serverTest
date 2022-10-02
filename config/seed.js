import mongoose from "mongoose";
import chalk from "chalk";
import { ControlPropertyItem } from "../models/control-property-item.js";
import { ControlProperty } from "../models/form-control-property.js";
import { Control } from "../models/form-control.js";
import { ControlType } from "../models/control-type.js";
import { ControlValueType } from "../models/control-value-type.js";
import { FormItem } from "../models/form-type.js";
import { FormItemProperty } from "../models/form-item-property.js";
import { Form } from "../models/form.js";

import { MONGO_URI } from "./config.js";

export const mongoConfig = mongoose
  .connect(MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }, 6000000)
  .then(
    async() => {
      console.log(
        `${chalk.bgBlue.white("Connected to the MongoDB database!")}`
      );
      await mongoose.connection.db.dropDatabase(); 
    },
    (err) => {
      console.log(
        `${chalk.bgRedBright.white("Cannot connect to the MongoDB database!")}`,
        err
      );
      process.exit();
    }
  );

    // seed database
    const seed = async () => {
    //    const controlPropertyItems = new ControlPropertyItem({
    //     name: "Control Property Item 1",
    //     description: "Control Property Item 1 Description",
    //     createdBy: "System",
    //     createdById: "System",
    //     lastModifiedBy: "System",
    //     lastModifiedById: "System",
    //     status: "enabled",
    //     statusDesc: "The record is enabled",
    // });
    // await controlPropertyItems.save();

    // const controlType = new ControlType({
    //     name: "Control Type 1",
    //     description: "Control Type 1 Description",
    //     createdBy: "System",
    //     createdById: "System",
    //     lastModifiedBy: "System",
    //     lastModifiedById: "System",
    //     status: "enabled",
    //     statusDesc: "The record is enabled",
    // });
    // await controlType.save();

    // const controlValueType = new ControlValueType({
    //     name: "Control Value Type 1",
    //     description: "Control Value Type 1 Description",
    //     createdBy: "System",
    //     createdById: "System",
    //     lastModifiedBy: "System",
    //     lastModifiedById: "System",
    //     status: "enabled",
    //     statusDesc: "The record is enabled",
    // });
    // await controlValueType.save();

    const control = new Control({
        name: "Control 1",
        description: "Control 1 Description",
        controlTypeId: controlType._id,
        controlValueTypeId: controlValueType._id,
        createdBy: "System",
        createdById: "System",
        lastModifiedBy: "System",
        lastModifiedById: "System",
        status: "enabled",
        statusDesc: "The record is enabled",
    });
    await control.save();

    const controlProperty = new ControlProperty({
        name: "Control Property 1",
        description: "Control Property 1 Description",
        controlId: control._id,
        controlTypeId: controlType._id,
        controlValueTypeId: controlValueType._id,
        controlPropertyItems: [controlPropertyItems._id],
        minimumValue: 0,
        maximumValue: 100,
        createdBy: "System",
        createdById: "System",
        lastModifiedBy: "System",
        lastModifiedById: "System",
        status: "enabled",
        statusDesc: "The record is enabled",
    });
    await controlProperty.save();

    const form = new Form({
        name: "Form 1",
        description: "Form 1 Description",
        formNavigation: "single-page",
        builtFormMetadata: {},
        createdBy: "System",
        createdById: "System",
        lastModifiedBy: "System",
        lastModifiedById: "System",
        status: "enabled",
        statusDesc: "The record is enabled",
    });
    await form.save();

    const formItem = new FormItem({
        name: "Form Item 1",
        description: "Form Item 1 Description",
        placeholder: "Form Item 1 Placeholder",
        formId: form._id,
        controlId: control._id,
       createdBy: "System",
        createdById: "System",
        lastModifiedBy: "System",
        lastModifiedById: "System",
        status: "enabled",
        statusDesc: "The record is enabled",
    });
    await formItem.save();

    const formItemProperty = new FormItemProperty({
        name: "Form Item Property 1",
        description: "Form Item Property 1 Description",
        value: "Form Item Property 1 Value",
        formItemId: formItem._id,
        controlPropertyId: controlProperty._id,
        createdBy: "System",
        createdById: "System",
        lastModifiedBy: "System",
        lastModifiedById: "System",
        status: "enabled",
        statusDesc: "The record is enabled",
    });
    await formItemProperty.save();
    console.log("Database seeded");
    mongoose.connection.close();
    }
    await seed();
