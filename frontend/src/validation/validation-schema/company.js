import * as yup from "yup";
import {
  startsWithUidNumber,
  startsWithVatNumber,
} from "../custom-validation/StartsWith";
export const schema = yup.object().shape({
  name: yup.string().required(),
  tradeName: yup.string(),
  uidNumber: yup
    .string()
    .required()
    .test(
      "uidNumberStartsWith",
      "UID Number must start with 8 or 6",
      startsWithUidNumber
    )
    .max(9)
    .min(9),
  vatNumber: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  country: yup.string().nullable(),
  region: yup.string().nullable(),
  additionalInformation: yup.string().nullable(),
  filePath: yup.string(),
});
