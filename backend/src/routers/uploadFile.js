const express = require("express");
const router = express.Router();
const upload = require("../services/uploadFile");
const { singleFileUpload } = require("../controllers/uploadFile");

router.post("/single", upload.single("file"), singleFileUpload);

module.exports = router;
