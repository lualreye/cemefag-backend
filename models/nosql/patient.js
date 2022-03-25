const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const PatientSchema = new mongoose.Schema(
  {
    cedula: {
      type: String,
    },
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    product: {
      type: Number,
    },
  },
  {
    timestamps: true, //TODO
    versionKey: false,
  }
);

PatientSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("patient", PatientSchema);
