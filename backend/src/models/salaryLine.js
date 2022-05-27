const mongoose = require("mongoose");

const salaryLineModel = new mongoose.Schema(
  {
    salaryHeadId: { type: String, required: true },
    employeeId: { type: String, required: true },
    netSalary: { type: Number, required: true },
    grossSalary: { type: Number, required: true },
    totalSalary: { type: Number, required: true },
    taxSalary: { type: Number, required: true },
    employeeContribute: { type: Number, required: true },
    employerContribute: { type: Number, required: true },
    employeeExtraContribute: { type: Number, default: 0 },
    employerExtraContribute: { type: Number, default: 0 },
    isPrimary: { type: Boolean, required: true },
    isContribute: { type: Boolean, required: true },
    isTax: { type: Boolean, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("SalaryLines", salaryLineModel);
