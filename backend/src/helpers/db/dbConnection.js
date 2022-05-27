const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/CompanyDb", {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("MongoDb Connection Successful");
    })
    .catch((err) => {
      console.log(err);
    })
};

module.exports = connectDatabase;
