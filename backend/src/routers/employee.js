const express = require("express");
const router = express.Router();
const { employeeSchema } = require("../validations/employee");
const {
  getAllEmployees,
  getByIdEmployee,
  createEmployee,
  deleteByIdEmployee,
  updateByIdEmployee,
} = require("../controllers/employee");

router.get("/", getAllEmployees);

router.get("/:id", getByIdEmployee);

router.post("/", createEmployee);

router.delete("/:id", deleteByIdEmployee);

router.put("/:id", updateByIdEmployee);

module.exports = router;
