const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");



const filePath = path.join(__dirname, "../../../../files");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    folderExists(filePath);
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

const folderExists = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};
