const Joi = require("joi");
const {
  startsWithUidNumber,
  startsWithVatNumber,
} = require("./custom-validation/StartsWith.validation");

function companySchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    tradeName: Joi.string().default(""),
    uidNumber: Joi.string()
      .required()
      .custom(startsWithUidNumber)
      .max(9)
      .min(9),
    vatNumber: Joi.string()
      .default("")
      .custom(startsWithVatNumber)
      .max(9)
      .min(9),
    address: Joi.string().default(""),
    city: Joi.string().default(""),
    country: Joi.string().default(""),
    region: Joi.string().default(""),
    additionalInformation: Joi.string().default(""),
    phoneNumber: Joi.string().default(""),
    email: Joi.string().default(""),
    website: Joi.string().default(""),
    filePath: Joi.string().default(""),
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
