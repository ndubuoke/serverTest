import mongoose, { Schema } from "mongoose";
import { CONTROL_TYPES, getEnumsArray } from "../utils/enums";


const controlPropertySchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      controlType:  { 
        type: String,
        enum: [...getEnumsArray(CONTROL_TYPES)],
        required: true,
      },
      defaultState:  { 
        type: String,
      },
      controlPropertyItems: {
         type : Array
      },
      createdBy:{ 
        type: String,
        required: true,
     },
      createdById :{ 
          type: String,
          required: true,
      },
      lastModifiedBy:{ 
        type: String,
        required: true,
      },
      lastModifiedById :{ 
        type: String,
        required: true,
      },
      status :{ 
        type: String,
        required: true,
        default: "enabled",
        enum: ["enabled", "disabled"],
      },
      statusDesc :{ 
        type: String,
        required: true,
        default: "The record is enabled",
      }, 
  },

  {
    timestamps: true,
  }
);

const ControlProperty = mongoose.model(
  "controlproperty",
  controlPropertySchema
);

export { ControlProperty };
