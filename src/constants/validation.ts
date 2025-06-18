import * as yup from 'yup'

const emailSchema = yup
  .string()
  .email('validation.invalidEmail')
  .required('validation.required')

const phoneNumberSchema = yup
  .string()
  .required('validation.required')
  .matches(/^(\+?\d{10,15})$/, 'validation.invalidPhoneNumber')

const creditNumberSchema = yup
  .string()
  .required('validation.required')
  .matches(/^\d{13,19}$/, 'validation.invalidCreditCardNumber')

const expiryDateSchema = yup
  .string()
  .required('validation.required')
  .matches(
    /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/,
    'validation.invalidExpiryDate'
  )

const cvvSchema = yup
  .string()
  .required('validation.required')
  .matches(/^\d{3,4}$/, 'validation.invalidCVV')

const nameOnCardSchema = yup
  .string()
  .required('validation.required')
  .matches(/^[a-zA-Z\s]{2,}$/, 'validation.invalidNameOnCard')

const timeSchema = yup
  .array()
  .min(1, 'validation.chooseMinimumOneTimeslot')
  .required('validation.required')

const searchSchema = yup
  .string()
  .required('validation.required')
  .matches(/^[A-Za-z]*$/, 'validation.onlyLatinLetters')

const stringRequired = yup.string().required('validation.required')

export const validationSubscribeToLetterSchema = yup.object({
  email: emailSchema,
})
export const validationContactUsSchema = yup.object({
  firstName: stringRequired,
  lastName: stringRequired,
  phoneNumber: phoneNumberSchema,
  message: stringRequired,
  email: emailSchema,
})
export const validationBookingSchema = yup.object({
  firstName: stringRequired,
  lastName: stringRequired,
  email: emailSchema,
  phoneNumber: phoneNumberSchema,
  time: timeSchema,
  date: stringRequired,
  message: stringRequired,
  creditNumber: creditNumberSchema,
  expiryDate: expiryDateSchema,
  cvv: cvvSchema,
  nameOnCard: nameOnCardSchema,
})
export const validationSearchDogSchema = yup.object({
  search: searchSchema,
})
