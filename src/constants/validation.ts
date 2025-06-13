import * as yup from 'yup'

const emailSchema = yup.string().email('Invalid email').required('Required')

const phoneNumberSchema = yup
  .string()
  .required('Required')
  .matches(
    /^(\+?\d{10,15})$/,
    'Invalid phone number. Must be 10 to 15 digits, can start with +'
  )

const creditNumberSchema = yup
  .string()
  .required('Required')
  .matches(/^\d{13,19}$/, 'Invalid credit card number')

const expiryDateSchema = yup
  .string()
  .required('Required')
  .matches(
    /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/,
    'Invalid expiry date. Format MM/YY or MM/YYYY'
  )

const cvvSchema = yup
  .string()
  .required('Required')
  .matches(/^\d{3,4}$/, 'Invalid CVV')

const nameOnCardSchema = yup
  .string()
  .required('Required')
  .matches(/^[a-zA-Z\s]{2,}$/, 'Invalid name on card')
export const validationSubscribeToLetterSchema = yup.object({
  email: emailSchema,
})
export const validationContactUsSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  phoneNumber: phoneNumberSchema,
  message: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
})

export const validationBookingSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: emailSchema,
  phoneNumber: phoneNumberSchema,
  time: yup.array().min(1, 'Choose minimum one timeslot').required('Required'),
  date: yup.string().required('Required'),
  message: yup.string().required('Required'),
  creditNumber: creditNumberSchema,
  expiryDate: expiryDateSchema,
  cvv: cvvSchema,
  nameOnCard: nameOnCardSchema,
})
