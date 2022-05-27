const mongoose = require("mongoose");

const employeeModel = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationalIdentity: { type: String, required: true, unique: true },
    birthDate: { type: Date },
    netSalary: { type: Number, required: true },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    additionalInformation: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    website: { type: String },
    filePath: { type: String },
  },
  { timestamps: true, versionKey: false, }
);

module.exports = mongoose.model("Employees", employeeModel);
