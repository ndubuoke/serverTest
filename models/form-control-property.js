import mongoose, { Schema } from "mongoose";
import { FORM_CONTROL_TYPES, getEnumsArray , STATUS} from "../utils/enums";


const formControlPropertySchema = new mongoose.Schema(
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
      formControlTypeDesc: {
        type: String
      },
      defaultState:  { 
        type: String,
      },
      formControlPropertyItems: {
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
        default: "active",
        enum: [...getEnumsArray(STATUS)]
      },
      statusDesc :{ 
        type: String,
        default: "The record is active",
      },  
  },

  {
    timestamps: true,
  }
);

const FormControlProperty = mongoose.model(
  "formcontrolproperty",
  formControlPropertySchema
);

export { FormControlProperty };
