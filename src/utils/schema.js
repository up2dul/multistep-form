import * as Yup from 'yup';

export const firstSchema = Yup.object({
  firstName: Yup.string().required('Enter your first name'),
  lastName: Yup.string()
});

export const secondSchema = Yup.object({
  gender: Yup.string().required('Select your gender').nullable(),
  dateBirth: Yup.date().required('Enter your birth date'),
  cityCountry: Yup.string().required('Enter your city and country'),
  phoneNumber: Yup.string()
    .required('Enter your phone number')
    .matches(/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g, {
      message: 'Must start with +62 or 0'
    }),
  email: Yup.string().email('Must be a valid email').required('Enter your email address'),
  website: Yup.string().url('Must be a valid URL'),
  github: Yup.string().url('Must be a valid URL').required('Enter your Github URL profile'),
  linkedin: Yup.string().url('Must be a valid URL').required('Enter your Linkedin URL profile')
});

export const thirdSchema = Yup.object({
  level: Yup.string().required('Please choose one').nullable(),
  stack: Yup.string().required('Please choose one').nullable(),
  experience: Yup.string().required('Please choose one').nullable(),
  resume: Yup.mixed(),
  learn: Yup.array().required('Select at least one'),
  sourcesInfo: Yup.array().required('Select at least one'),
  motivation: Yup.string().required('Enter your motivation on joining this bootcamp'),
  question: Yup.string()
});
