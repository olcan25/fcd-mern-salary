const express = require("express");
const router = express.Router();
const {
  getAllBySalaryHeadId,
  createBulk,
  deleteBulk,
  deleteSalaryLineById,
  upsertBulk,
} = require("../controllers/salary");

router.get("/heads/:id", getAllBySalaryHeadId);

router.post("/", createBulk);

router.delete("/:id", deleteBulk);

router.delete("/lines/:id", deleteSalaryLineById);

router.put("/:id", upsertBulk);

module.exports = router;
