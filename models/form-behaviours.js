import mongoose from "mongoose";
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
  },
  {
    timestamps: true,
  }
);

const FormBehaviours = mongoose.model("formbehaviours", formBehaviourSchema);

export { FormBehaviours };
