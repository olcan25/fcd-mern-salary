const salaryHeadModel = require("../models/salaryHead");

const getSalaryHeadById = (id)=>{
  return salaryHeadModel.findOne({ _id: id });
}

const create = (salaryHead) => {
  const instance = new salaryHeadModel({
    ...salaryHead,
  });
  return instance.save();
};
const deleteById = (id) => {
  return salaryHeadModel.deleteOne({ _id: id });
};
const updateById = (id, salaryHead) => {
  return salaryHeadModel.updateOne({ _id: id }, salaryHead);
};

module.exports = {
  getSalaryHeadById,
  create,
  deleteById,
  updateById,
};
