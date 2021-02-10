import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('firstName is required'),
  email: Yup.string().email('Enter valid email Address').required('Email is required'),
  lastName: Yup.string().required('lastName is required'),
  preferedLanguage: Yup.string().required('Language is required'),
  officeAddres: Yup.string().required('Address is required'),
  profilePicture: Yup.mixed().required('A file is required'),
});
export default validationSchema;
