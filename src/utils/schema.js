import * as Yup from 'yup';

export const firstSchema = Yup.object({
  firstName: Yup.string().required('Enter your first name'),
  lastName: Yup.string()
});
