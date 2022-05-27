const express = require("express");
const router = express.Router();

const singleFileUpload = (req, res, next) => {
  const file = req.file;
  res.status(200).send(file);
};

module.exports = { singleFileUpload };
