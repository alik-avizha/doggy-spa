import type {
  ValidationBookingSchemaType,
  ValidationContactUsSchemaType,
  ValidationSubscribeToLettersSchemaType,
  ValidationSearchDogSchemaType,
} from '@/types'

export const SUBSCRIBE_TO_LETTER_DEFAULT_VALUES: ValidationSubscribeToLettersSchemaType =
  {
    email: '',
  }

export const CONTACT_US_DEFAULT_VALUES: ValidationContactUsSchemaType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
}

export const BOOKING_DEFAULT_VALUES: ValidationBookingSchemaType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  time: [],
  date: '',
  message: '',
  creditNumber: '',
  expiryDate: '',
  cvv: '',
  nameOnCard: '',
}

export const SEARCH_DOG_DEFAULT_VALUES: ValidationSearchDogSchemaType = {
  search: '',
}
