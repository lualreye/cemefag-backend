const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const UserSchema = new mongoose.Schema(
  {
    userCode: {
      type: String,
    },
    userName: {
      type: String,
    },
    userLevel: {
      type: String,
    },
    userPassword: {
      type: String,
      select: false,
    },
    userRole: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //TODO
    versionKey: false,
  }
);

UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("users", UserSchema);
