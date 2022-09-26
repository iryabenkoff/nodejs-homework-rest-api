const { Schema, model } = require("mongoose");
const Joi = require("joi");
const {handleMongooseSchemaError} = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      min: 1,
      max: 30,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      unique: true,
      min: 6,
      max: 30,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    }
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseSchemaError);

const addScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFovirteScheme = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemes = {
  addScheme,
  updateFovirteScheme,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemes,
};
