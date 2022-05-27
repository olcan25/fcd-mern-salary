const express = require("express");
const router = express.Router();
const upload = require("../services/file");
const { singleFileUpload, deleteSingleFile } = require("../controllers/file");

router.post("/uploads/single", upload.single("file"), singleFileUpload);

router.post("/delete", deleteSingleFile);

module.exports = router;
