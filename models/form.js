import mongoose from "mongoose";
import { FORM_TYPES, STATUS , FORM_STATUS,getEnumsArray} from "../utils/enums.js";

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    formType: {
      type: String,
      enum: [...getEnumsArray(FORM_TYPES)],
      required: true,
    },
    formTypeDesc: {
      type: String
    },
    formStatus: {
      type: String,
      required: true,
      enum: [...getEnumsArray(FORM_STATUS)],
    },
    version: {
      type: Number,
      required: true,
      default: 1,
    },
    builtFormMetadata: {
      type: Object,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    createdById: {
      type: String,
      required: true,
    },
    lastModifiedBy: {
      type: String,
      required: true,
    },
    lastModifiedById: {
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

const Form = mongoose.model("form", formSchema);

export { Form };
