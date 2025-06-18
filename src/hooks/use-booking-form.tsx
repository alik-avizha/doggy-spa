import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { BOOKING_DEFAULT_VALUES, BOOKING_INFO, TIMESLOTS } from '@/constants'
import { validationBookingSchema } from '@/constants/validation'
import { formatDateEn, formatDateRu } from '@/lib'
import { removeFromLocalStorage, setInLocalStorage } from '@/lib/local-storage'
import type { ValidationBookingSchemaType } from '@/types'

export const useBookingForm = () => {
  const { t, i18n } = useTranslation()

  const [isModalActive, setModalActive] = useState(false)
  const [notification, setNotification] = useState(false)

  const methods = useForm<ValidationBookingSchemaType>({
    defaultValues: BOOKING_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: yupResolver(validationBookingSchema),
  })

  const { handleSubmit, watch, reset } = methods

  const date = watch('date')
  const currentLang = i18n.language
  const formatDate = currentLang.startsWith('ru') ? formatDateRu : formatDateEn
  const labelDate = date ? formatDate(date) : ''

  const localizedTimeSlots = TIMESLOTS.map(item => ({
    ...item,
    label: t(item.label),
  }))

  const onSubmit: SubmitHandler<ValidationBookingSchemaType> = formData => {
    setInLocalStorage(BOOKING_INFO, JSON.stringify(formData))
    setModalActive(true)
  }

  const onModalClose = useCallback(() => {
    setModalActive(false)
  }, [])

  const onCloseNotification = useCallback(() => {
    setNotification(false)
  }, [])

  const onPaymentHandler = useCallback(() => {
    reset()
    setModalActive(false)
    setNotification(true)
    removeFromLocalStorage(BOOKING_INFO)
  }, [reset])

  return {
    methods,
    isModalActive,
    notification,
    labelDate,
    localizedTimeSlots,
    onSubmit: handleSubmit(onSubmit),
    onModalClose,
    onCloseNotification,
    onPaymentHandler,
  }
}
