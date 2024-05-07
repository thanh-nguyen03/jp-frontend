import { object, string } from "yup";

export const hrValidationSchema = object({
  email: string().required("Account Email is required").email("Invalid email"),
  firstName: string().required("Account First Name is required"),
  lastName: string().required("Account Last Name is required"),
  password: string().required("Account Password is required"),
});
