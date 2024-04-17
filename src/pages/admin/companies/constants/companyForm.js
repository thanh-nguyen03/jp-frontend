import { object, string } from "yup";

export const companyValidationSchema = object({
  code: string().required("Code is required"),
  name: string().required("Name is required"),
  description: string().required("Description is required"),
  address: string().required("Address is required"),
});

export const companyAccountValidationSchema = object({
  companyAccountEmail: string().required("Account Email is required").email("Invalid email"),
  companyAccountFirstName: string().required("Account First Name is required"),
  companyAccountLastName: string().required("Account Last Name is required"),
  companyAccountPassword: string().required("Account Password is required"),
});
