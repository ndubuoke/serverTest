import mongoose, { Schema } from "mongoose";

const formItemPropertySchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
      formItemId:  { 
        type: Schema.Types.ObjectId,
         ref: 'formitem',
         required: true,
      },
      controPropertyId:  { 
        type: Schema.Types.ObjectId,
        ref: 'controlproperty',
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

const FormItemProperty = mongoose.model(
  "formitemproperty",
  formItemPropertySchema
);

export { FormItem };
