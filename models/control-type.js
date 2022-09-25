import mongoose, { Schema } from "mongoose";

const controlTypeSchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
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

const ControlType = mongoose.model(
  "controltype",
  controlTypeSchema
);

export { ControlType };
