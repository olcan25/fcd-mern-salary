const employeeModel = require("../models/employee");

const getAll = () => {
  return employeeModel.find({});
}



const getById = (id) => {
  return employeeModel.findById(id);
}

const create = (employee) => {
  const instance = new employeeModel({
    ...employee,
  });
  return instance.save();
}

const deleteById = (id) => {
  return employeeModel.findByIdAndDelete(id);
}

const updateById = (id, employee) => {
  return employeeModel.findByIdAndUpdate(id, employee);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
