const companyService = require("../services/company");

const getAllCompanies = (req, res) => {
  companyService
    .getAll()
    .then((response) => res.send(response))
    .catch((err) => res.status(400).send(err));
};

const getByIdCompany = (req, res) => {
  const id = req.params.id;
  companyService
    .getById(id)
    .then((company) => {
      res.send(company);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const createCompany = (req, res) => {
  companyService
    .create(req.body)
    .then((response) => res.send({ message: "Created", data: response }))
    .catch((err) => res.status(400).send(err));
};

const deleteByIdCompany = (req, res) => {
  const id = req.params.id;
  companyService
    .deleteById(id)
    .then((response) => res.send({ message: "Deleted", data: response }))
    .catch((err) => res.status(400).send(err));
};

const updateByIdCompany = (req, res) => {
  const id = req.params.id;
  companyService
    .updateById(id, req.body)
    .then((response) => res.send({ message: "Updated", data: response }))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getAllCompanies,
  getByIdCompany,
  createCompany,
  deleteByIdCompany,
  updateByIdCompany,
};
