const express = require("express");
const routers = express.Router();
const employeeRouters = require('./employee');
const companyRouters = require('./company');
const salaryRouters = require('./salary');
const uploadRouters = require('./file');


routers.use('/employees', employeeRouters)
routers.use('/companies', companyRouters)
routers.use('/salaries', salaryRouters)
routers.use('/files', uploadRouters)


module.exports = routers;