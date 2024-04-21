import { date, number, object, string } from "yup";

export const recruitmentFormValidationSchema = object({
  title: string().required("Title is required"),
  content: string().required("Content is required"),
  jobType: string().required("Job type is required"),
  minSalary: number().required("Min salary is required"),
  maxSalary: number().required("Max salary is required"),
  deadline: date().required("Deadline is required"),
  experience: number().required("Experience is required"),
});
