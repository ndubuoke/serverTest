import mongoose from "mongoose";
import { FORM_CONTROL_TYPES, getEnumsArray, STATUS } from "../utils/enums";

const formControlPropertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    formControlType: {
      type: String,
      enum: [...getEnumsArray(FORM_CONTROL_TYPES)],
      required: true,
    },
    formControlTypeDesc: {
      type: String,
    },
    defaultState: {
      type: String,
    },
    formControlPropertyItems: [{ type: String }],
    hybridFormControlPropertyItems: [
      {
        formControlType: {
          type: String,
          enum: [...getEnumsArray(FORM_CONTROL_TYPES)],
        },
        defaultState: { type: String },
        formControlPropertyItems: [{ type: String }],
      },
    ],
    createdBy: {
      type: String,
      required: [true, "Please add the name of the creator"],
    },
    createdById: {
      type: String,
      required: [true, "Please add the ID of the creator"],
    },
    lastModifiedBy: {
      type: String,
      required: [true, "Please add the name of the last modifier"],
    },
    lastModifiedById: {
      type: String,
      required: [true, "Please add the name of the last modifier"],
    },
    status: {
      type: String,
      required: true,
      default: "active",
      enum: [...getEnumsArray(STATUS)],
    },
    statusDesc: {
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
