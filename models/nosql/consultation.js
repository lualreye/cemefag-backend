const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const ConsultationSchema = new mongoose.Schema(
  {
    patient: {
      type: Number,
    },
    product: {
      type: Number,
    },
    speciality: {
      type: Number,
    },
    doctor: {
      type: Number,
    },
    user: {
      type: Number,
    },
    dateReg: {
      type: Date,
    },
    dateAge: {
      type: Date,
    },
    payform: {
      type: Number,
    },
    coverage: {
      type: String,
    },
    value: {
      type: Number,
    },
    treated: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ConsultationSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("agenda", ConsultationSchema);
