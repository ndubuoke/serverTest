import mongoose from "mongoose";

const formBehaviourDataSchema = new mongoose.Schema(
  {
    formType: {
      type: String,
      required: true,
    },
    behaviourStatus: {
      type: String,
    },
    version: {
      type: Number,
    },
    behaviours: {
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

export default FormBehavioursData;
