const salaryHeadService = require("../services/salaryHead");
const salaryLineService = require("../services/salaryLine");

const getAllBySalaryHeadId = async (req, res) => {
  const salaryHeadId = req.params.id;

  const salaryHead = await salaryHeadService.getSalaryHeadById(salaryHeadId);

  const salaryLines = await salaryLineService.getAllBySalaryHeadId(
    salaryHeadId
  );

  return res.send({ salaryHead, salaryLines });
};

const createBulk = async (req, res) => {
  const salaryHead = await salaryHeadService.create(req.body.salaryHead);

  const salaryLines = await salaryLineService.createBulk(
    req.body.salaryLines,
    salaryHead._id
  );
  try {
    res.send({ salaryHead, salaryLines });
  } catch (error) {
    res.send(error);
  }
};

const deleteBulk = async (req, res) => {
  const salaryHead = await salaryHeadService.deleteById(req.params.id);
  const salaryLines = await salaryLineService.deleteBulkBySalaryHeadId(
    req.params.id
  );
  try {
    res.send({ salaryHead, salaryLines });
  } catch (err) {
    res.send({ err });
  }
};

//tek satir silmek icin
const deleteSalaryLineById = async (req, res) => {
  let salaryHeadId = req.params.id;
  const salaryLine = await salaryLineService.deleteBySalaryLineId(salaryHeadId);
  try {
    res.send({ salaryLine });
  } catch (err) {
    res.send({ err });
  }
};

//(guncelleme) fakat once silme yapılır ve yeniden eklenir
const upsertBulk = async (req, res) => {
  //SalaryHead guncellemek icin
  const salaryHeadId = req.params.id;
  const salaryHead = await salaryHeadService.updateById(
    salaryHeadId,
    req.body.salaryHead
  );

  //SalaryLines
  //silme
  const deleteSalaryLines = await salaryLineService.deleteBulkBySalaryHeadId(
    salaryHeadId
  );
  //ekleme
  const createSalaryLines = await salaryLineService.createBulk(
    req.body.salaryLines,
    salaryHeadId
  );
  try {
    res.send({ salaryHead, deleteSalaryLines, createSalaryLines });
  } catch (err) {
    res.send({ err });
  }
};

module.exports = {
  getAllBySalaryHeadId,
  createBulk,
  deleteBulk,
  deleteSalaryLineById,
  upsertBulk
};
