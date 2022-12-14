import mongoose, { Schema } from "mongoose";
import { FORM_CONTROL_TYPES, getEnumsArray, STATUS } from "../utils/enums.js";

const formControlSchema = new mongoose.Schema(
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
    formControlProperties: [
      {
        type: Schema.Types.ObjectId,
        ref: "formcontrolproperty",
      },
    ],
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
    pageId: {
      type: String,
      default: "",
    },
    sectionId: {
      type: String,
      default: "",
    },
  },

  {
    timestamps: true,
  }
);

const FormControl = mongoose.model("formcontrol", formControlSchema);

export { FormControl };
