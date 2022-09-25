import mongoose, { Schema } from "mongoose";

const controlSchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      controlTypeId:  { 
        type: Schema.Types.ObjectId,
         ref: 'controltype',
         required: true,
      },
      controlValueTypeId:  { 
        type: Schema.Types.ObjectId,
         ref: 'controlvaluetype',
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

const Control = mongoose.model(
  "control",
  controlSchema
);

export { Control };
