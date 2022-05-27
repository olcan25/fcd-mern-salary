const Joi = require("joi");

function employeeSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    nationalIdentity: Joi.string().required(),
    birthDate: Joi.date().allow(""),
    netSalary: Joi.number().required(),
    address: Joi.string().allow(""),
    city: Joi.string().allow(""),
    country: Joi.string().allow(""),
    additionalInformation: Joi.string().allow(""),
    filePath: Joi.string().allow(""),
    phoneNumber: Joi.string().allow(""),
    email: Joi.string().allow(""),
    website: Joi.string().allow(""),
  });

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = schema.validate(req.body, options);

  if (error) {
    res
      .status(400)
      .json(
        `Validation error: ${error.details.map((x) => x.message).join(", ")}`
      );
  } else {
    req.body = value;
    next();
  }
}

module.exports = {
  employeeSchema,
};
