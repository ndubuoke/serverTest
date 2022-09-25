import mongoose, { Schema } from "mongoose";

const formSchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      formNavigation:  { 
        type: String,
        required: true,
        enum: ["tabs", "wizarrd", "accodion", "single-page"],
      },
      builtFormMetadata:{ 
        type: Object,
        required: true,
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

const Form = mongoose.model(
  "form",
  formSchema
);

export { Form };
