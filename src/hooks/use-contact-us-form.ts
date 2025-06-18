import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { CONTACT_US_DEFAULT_VALUES } from '@/constants'
import { validationContactUsSchema } from '@/constants/validation'
import { contactUsService } from '@/services'
import type { NotificationState, ValidationContactUsSchemaType } from '@/types'

export const useContactUsForm = () => {
  const { t } = useTranslation()

  const methods = useForm<ValidationContactUsSchemaType>({
    defaultValues: CONTACT_US_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: yupResolver(validationContactUsSchema),
  })

  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState<NotificationState>({
    visible: false,
    type: 'success',
    message: '',
  })

  const onSubmit: SubmitHandler<
    ValidationContactUsSchemaType
  > = async formData => {
    try {
      setLoading(true)
      await contactUsService(formData)
      methods.reset()
      setNotification({
        visible: true,
        type: 'success',
        message: t('notification.thankYou'),
      })
    } catch (error) {
      console.error(error)
      setNotification({
        visible: true,
        type: 'error',
        message: t('notification.sorrySomething'),
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
