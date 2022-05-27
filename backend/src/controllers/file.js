const express = require("express");
const router = express.Router();
const fs = require("fs");

const singleFileUpload = (req, res, next) => {
  const file = req.file;
  res.status(200).send(file);
};

const deleteSingleFile = (req, res, next) => {
  const path = req.body.path;
  fs.unlink(path, (err) => {
    res.status(200).send('File deleted');
  });
};


module.exports = { singleFileUpload, deleteSingleFile };