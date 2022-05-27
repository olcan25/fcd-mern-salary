const Joi = require("joi");
const {
  startsWithUidNumber,
  startsWithVatNumber,
} = require("./custom-validation/StartsWith.validation");

function companySchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    tradeName: Joi.string().allow(""),
    uidNumber: Joi.string()
      .required()
      .custom(startsWithUidNumber)
      .max(9)
      .min(9),
    vatNumber: Joi.string().allow("").custom(startsWithVatNumber).max(9).min(9),
    address: Joi.string().allow(""),
    city: Joi.string().allow(""),
    country: Joi.string().allow(""),
    region: Joi.string().allow(""),
    additionalInformation: Joi.string().allow(""),
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
  companySchema,
};
