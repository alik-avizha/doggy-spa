import type * as yup from 'yup'

import type {
  validationBookingSchema,
  validationContactUsSchema,
  validationSubscribeToLetterSchema,
} from '@/constants/validation'

export type AnimalItem = {
  id: number
  url: string | string[]
  description: string
  category: string
  price: string
}

type DogImage = {
  id: string
  width: number
  height: number
  url: string
}

type DogWeightHeight = {
  imperial: string
  metric: string
}

export type Dog = {
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  reference_image_id: string
  image: DogImage
  height: DogWeightHeight
  weight: DogWeightHeight
}

export type ValidationSubscribeToLettersSchemaType = yup.InferType<
  typeof validationSubscribeToLetterSchema
>

export type ValidationContactUsSchemaType = yup.InferType<
  typeof validationContactUsSchema
>

export type ValidationBookingSchemaType = yup.InferType<
  typeof validationBookingSchema
>

export type BookInfo = Omit<ValidationBookingSchemaType, 'date'> & {
  date: string
}

export type NotificationState = {
  visible: boolean
  type: 'success' | 'error'
  message: string
}
