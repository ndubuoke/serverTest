import mongoose, { Schema } from "mongoose";

const controlPropertySchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      controlId:  { 
        type: Schema.Types.ObjectId,
        ref: 'control',
        required: true,
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
      controlPropertyItems: [{
         type : Schema.Types.ObjectId,
          ref: 'controlpropertyitem' 
      }],
      minimumValue: {
        type: Number,
      },
      maximumValue: {
        type: Number,
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

const ControlProperty = mongoose.model(
  "controlproperty",
  controlPropertySchema
);

export { ControlProperty };
