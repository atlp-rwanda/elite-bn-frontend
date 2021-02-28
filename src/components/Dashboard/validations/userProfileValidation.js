import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  firstName: Yup.string('First name must be a string')
    .trim()
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g, 'Invalid name')
    .required('firstName is required'),
  email: Yup.string()
    .email('Enter valid email Address')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim,
      'Input valid email',
    )
    .required('Email is required'),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g, 'Invalid name')
    .required('LastName is required'),
  preferedLanguage: Yup.string()
    .matches(/[\p{L}-]+/gu, 'Invalid language')
    .required('Language is required'),
  officeAddres: Yup.string().required('Address is required'),
  profilePicture: Yup.mixed().required('A file is required'),
})
export default validationSchema
