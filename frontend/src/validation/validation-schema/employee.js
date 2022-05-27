import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  nationalIdentity: yup.string().required().min(10).max(10),
  birthDate: yup.date(),
  netSalary: yup.number().required(),
  address: yup.string(),
  city: yup.string(),
  country: yup.string(),
  additionalInformation: yup.string(),
  filePath: yup.string(),
});
