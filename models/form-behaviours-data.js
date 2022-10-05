import mongoose, { Schema } from "mongoose";

const formBehaviourDataSchema = new mongoose.Schema(
  {
    formId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "form",
    },
    behaviourId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "formbehaviours",
    },
    condition: {
      if: {
        type: string,
      },
      state: {
        type: string,
      },
      value: {
        type: string,
      },
    },
    actions: {
      type: Array,
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
  },
  {
    timestamps: true,
  }
);

const FormBehavioursData = mongoose.model(
  "formbehavioursdata",
  formBehaviourDataSchema
);

export { FormBehavioursData };
