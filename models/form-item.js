import mongoose, { Schema } from "mongoose";

const formItemSchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      formId:  { 
        type: Schema.Types.ObjectId,
         ref: 'form',
         required: true,
      },  
      controlId:  { 
        type: Schema.Types.ObjectId,
         ref: 'control',
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

const FormItem = mongoose.model(
  "formitem",
  formItemSchema
);

export { FormItem };
