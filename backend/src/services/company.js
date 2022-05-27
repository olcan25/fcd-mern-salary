const companyModel = require("../models/company");

const getAll = () => {
  return companyModel.find({});
};
const getById = (id) => {
  return companyModel.findById(id);
};
const create = (company) => {
  const instance = new companyModel({
    ...company,
  });
  return instance.save();
};

const deleteById = (id) => {
  return companyModel.findByIdAndDelete(id);
};
const updateById = (id, company) => {
  return companyModel.findByIdAndUpdate(id, company);
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
