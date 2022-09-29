import mongoose, { Schema } from "mongoose";
import { FORM_CONTROL_TYPES, getEnumsArray } from "../utils/enums";

const formControlSchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      formControlType:  { 
        type: String,
        enum: [...getEnumsArray(FORM_CONTROL_TYPES)],
        required: true,
      },
      formControlProperties: [{
        type : Schema.Types.ObjectId,
         ref: 'formcontrolproperty' 
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
        default: "The record is enabled",
      }, 
  },

  {
    timestamps: true,
  }
);

const FormControl = mongoose.model(
  "formcontrol",
  formControlSchema
);

export { FormControl };
