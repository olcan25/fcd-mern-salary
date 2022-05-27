const mongoose = require("mongoose");

const salaryHeadModel = new mongoose.Schema(
  {
    companyId: { type: Object, required: true },
    month: { type: Number, required: true, max: 12, min: 1 },
    year: { type: Number, required: true, max: 9999, min: 1 },
    additionalInformation: { type: String, default: "" },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("SalaryHeads", salaryHeadModel);
