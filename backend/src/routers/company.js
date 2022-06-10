const express = require("express");
const router = express.Router();
const { companySchema } = require("../validations/company");
const {
  getAllCompanies,
  getByIdCompany,
  createCompany,
  deleteByIdCompany,
  updateByIdCompany,
} = require("../controllers/company");

router.get("/", getAllCompanies);

router.get("/:id", getByIdCompany);

router.post("/", createCompany);

router.delete("/:id", deleteByIdCompany);

router.put("/:id", updateByIdCompany);

module.exports = router;
