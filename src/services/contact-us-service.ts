import type { ValidationContactUsSchemaType } from '@/contstants/types'

import { baseEmailService } from './base-email-service'

export async function contactUsService(
  data: ValidationContactUsSchemaType
): Promise<void> {
  return baseEmailService('https://node-js-gmail.vercel.app/contact', data)
}
