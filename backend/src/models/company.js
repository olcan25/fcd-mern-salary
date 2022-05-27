const mongoose = require("mongoose");

const companyModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tradeName: { type: String },
    uidNumber: { type: String, required: true, unique: true },
    vatNumber: { type: String,  default: null},
    address: { type: String, default: null },
    city: { type: String, default: null },
    country: { type: String, default: null },
    region: { type: String, default: null },
    additionalInformation: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    email: { type: String, default: null },
    website: { type: String, default: null },
    file: { type: String, default: null },
  },
  { timestamps: true, versionKey: false }
);

// mongoose schema middleware
companyModel.pre("save", function (next) {
  this.name = this.name.toUpperCase();
  this.tradeName = this.tradeName.toUpperCase();
  next();
});

// companyModel.pre("findByIdAndUpdate", function (next) {
//   this.name = this.name.toUpperCase();
//   this.tradeName = this.tradeName.toUpperCase();
//   next();
// });

module.exports = mongoose.model("Companies", companyModel);
