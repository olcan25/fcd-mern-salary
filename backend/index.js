const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const routers = require("./src/routers");
const connectDatabase = require("./src/helpers/db/dbConnection");

dotenv.config({ path: "./src/config/env/config.env" });

// MongoDb Connection
connectDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/", routers);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
