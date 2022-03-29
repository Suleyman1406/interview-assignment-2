import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string().min(4).max(10),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const requireSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm password is required"),
});
