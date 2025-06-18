import 'i18next'
import type { TranslationType } from '@/i18n/types'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: TranslationType
  }
}
