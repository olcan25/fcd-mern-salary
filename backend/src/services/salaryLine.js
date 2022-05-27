const salaryLineModel = require("../models/salaryLine");

//set salaryhead.id to salaryline
const setSalaryHeadId = (salaryLines, salaryHeadId) => {
  return new Promise((resolve, reject) => {
    salaryLines.forEach((salaryLine) => {
      salaryLine.salaryHeadId = salaryHeadId;
    });
    resolve(salaryLines);
  });
};

const getAllBySalaryHeadId = (salaryHeadId) => {
  return salaryLineModel.find({ salaryHeadId });
};

const createBulk = (salaryLines, salaryHeadId) => {
  setSalaryHeadId(salaryLines, salaryHeadId).then();
  return salaryLineModel.insertMany(salaryLines);
};

const deleteBulkBySalaryHeadId = (salaryHeadId) => {
  return salaryLineModel.deleteMany({ salaryHeadId });
};

const deleteBySalaryLineId = (id) => {
  return salaryLineModel.deleteOne({ _id: id });
};

module.exports = {
  getAllBySalaryHeadId,
  createBulk,
  deleteBulkBySalaryHeadId,
  deleteBySalaryLineId,
};
