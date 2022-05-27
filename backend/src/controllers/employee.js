const employeeeService = require("../services/employee");

const getAllEmployees = (req, res) => {
  const id = req.params._id;
  employeeeService
    .getAll()
    .then((employees) => {
      res.send(employees);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getByIdEmployee = (req, res) => {
  const id = req.params.id;
  employeeeService
    .getById(id)
    .then((employee) => {
      res.status(400).send(employee);
    })
    .catch((err) => {
      res.send(err);
    });
};

const createEmployee = (req, res) => {
  employeeeService
    .create(req.body)
    .then((response) => res.send({ message: "Created", data: response }))
    .catch((err) => res.status(400).send(err));
};

const deleteByIdEmployee = (req, res) => {
  const id = req.params.id;
  employeeeService
    .deleteById(id)
    .then((response) => res.send({ message: "Deleted", data: response }))
    .catch((err) => res.status(400).send(err));
};

const updateByIdEmployee = (req, res) => {
  const id = req.params.id;
  employeeeService
    .updateById(id, req.body)
    .then((response) => res.send({ message: "Updated", data: response }))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getAllEmployees,
  getByIdEmployee,
  createEmployee,
  deleteByIdEmployee,
  updateByIdEmployee,
};
