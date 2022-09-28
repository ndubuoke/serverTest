import mongoose, { Schema } from "mongoose";
import { CONTROL_TYPES, getEnumsArray } from "../utils/enums";

const controlSchema = new mongoose.Schema(
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
      controlProperty: [{
        type : Schema.Types.ObjectId,
         ref: 'controlproperty' 
     }],
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

const Control = mongoose.model(
  "control",
  controlSchema
);

export { Control };
