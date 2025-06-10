import type { ValidationSubscribeToLettersSchemaType } from '@/contstants/types'

import { baseEmailService } from './base-email-service'

export async function subscribeToNewsletterService(
  data: ValidationSubscribeToLettersSchemaType,
  errors: Record<keyof ValidationSubscribeToLettersSchemaType, string>
): Promise<void> {
  return baseEmailService(
    'https://node-js-gmail.vercel.app/subscribeToLetter',
    data,
    errors
  )
}
