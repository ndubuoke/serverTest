import mongoose from "mongoose";
import { getEnumsArray, STATUS } from "../utils/enums.js";

const formBehaviourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
    },
    config: {
      conditions: {
        type: Array,
      },
      actions: {
        type: Array,
      },
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

const FormBehaviours = mongoose.model("formbehaviours", formBehaviourSchema);

export { FormBehaviours };
