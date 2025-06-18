import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { SUBSCRIBE_TO_LETTER_DEFAULT_VALUES } from '@/constants'
import { validationSubscribeToLetterSchema } from '@/constants/validation'
import { subscribeToNewsletterService } from '@/services'
import type {
  NotificationState,
  ValidationSubscribeToLettersSchemaType,
} from '@/types'

export const useSubscribeToNewsletter = () => {
  const { t } = useTranslation()

  const methods = useForm<ValidationSubscribeToLettersSchemaType>({
    defaultValues: SUBSCRIBE_TO_LETTER_DEFAULT_VALUES,
    mode: 'onBlur',
    resolver: yupResolver(validationSubscribeToLetterSchema),
  })

  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState<NotificationState>({
    visible: false,
    type: 'success',
    message: '',
  })

  const onSubmit: SubmitHandler<
    ValidationSubscribeToLettersSchemaType
  > = async formData => {
    try {
      setLoading(true)
      await subscribeToNewsletterService(formData)
      methods.reset()
      setNotification({
        visible: true,
        type: 'success',
        message: t('notification.successfullySubscribed'),
      })
    } catch (error) {
      console.error(error)
      setNotification({
        visible: true,
        type: 'error',
        message: t('notification.subscriptionFailed'),
      })
    } finally {
      setLoading(false)
    }
  }

  const onCloseNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, visible: false }))
  }, [])

  return {
    methods,
    loading,
    notification,
    onSubmit: methods.handleSubmit(onSubmit),
    onCloseNotification,
  }
}
