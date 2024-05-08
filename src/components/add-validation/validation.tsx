import * as Yup from "yup";

import { variables } from "./variable";

const { required, IsEmail } = variables;

export const validationContact = Yup.object({
  firstName: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().required(required).email(IsEmail),
  phone: Yup.string()
    .required(required)
    .matches(/^[0-9]+$/gi, "Only number is allowed"),
  message: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
});

export const validationEstimate = Yup.object({
  firstName: Yup.string().required(required),
  email: Yup.string().required(required).email(IsEmail),
  phoneNumber: Yup.string().matches(/^[0-9]+$/gi, "Only number is allowed"),
  companyName: Yup.string().required(required),
  projectType: Yup.string().required(required),
  priority: Yup.string().required(required),
  projectStatus: Yup.string().required(required),
  region: Yup.string().required(required),
  description: Yup.string().required(required),
});
export const validationJobSearch = Yup.object({
  jobType: Yup.string().required(required),
  experience: Yup.string().required(required),
});
export const validationApplyJob = Yup.object().shape({

 
  // CV: Yup.mixed().required("A file is required"),

   name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNo: Yup.string().required("Phone number is required"),
 



});


