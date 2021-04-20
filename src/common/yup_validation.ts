import * as Yup from "yup";

const string_required = Yup.string()
  .min(2, "short")
  .max(50, "Too Long")
  .required();
const number_required = Yup.number().required();

const long_string_required = Yup.string()
  .min(2, "short")
  .max(700, "Too Long")
  .required();
const email_required = Yup.string()
  .email("Invalid email address")
  .required("Required");

const string_optional = Yup.string().min(2, "short").max(700, "Too Long");

const number_optional = Yup.number();
const email_optional = Yup.string().email("Invalid email address");
export {
  number_required,
  string_required,
  long_string_required,
  email_required,
  string_optional,
  number_optional,
  email_optional,
};
