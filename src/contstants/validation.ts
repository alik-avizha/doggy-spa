import * as yup from 'yup'

export const validationSubscribeToLetterSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
})

export const validationContactUsSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  phoneNumber: yup.string().required('Required'),
  message: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
})
