import type { ValidationSubscribeToLettersSchemaType } from '@/types'

import { baseEmailService } from './base-email-service'

export async function subscribeToNewsletterService(
  data: ValidationSubscribeToLettersSchemaType
): Promise<void> {
  return baseEmailService(
    'https://node-js-gmail.vercel.app/subscribeToLetter',
    data
  )
}
