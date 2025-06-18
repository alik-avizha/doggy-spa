'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import {
  ControlledCheckboxGroup,
  ControlledDatePicker,
  ControlledTextarea,
} from '@/components/controlled-fields'
import {
  AmazonIcon,
  ApplePayIcon,
  GooglePayIcon,
  MasterCardIcon,
  VisaIcon,
} from '@/components/icons'
import { Modal } from '@/components/modal'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { BOOKING_DEFAULT_VALUES, BOOKING_INFO, TIMESLOTS } from '@/constants'
import { validationBookingSchema } from '@/constants/validation'
import { formatDateEn, formatDateRu } from '@/lib'
import { removeFromLocalStorage, setInLocalStorage } from '@/lib/local-storage'
import type { ValidationBookingSchemaType } from '@/types'

import { BookingInfo } from './booking-info'
import {
  BookContainer,
  BookingBlock,
  DateBlock,
  DateTimeContainer,
  ExpiredCvvBlock,
  LeftBlock,
  MainTitle,
  PaymentsBlock,
  PaymentsContainer,
  PaymentsTypesBlock,
  RightBlock,
  SubmitBlock,
  TextFieldPayment,
  TextFieldsBlock,
  TextFieldsStyled,
  Wrapper,
} from './styled'

const MapInfo = dynamic(() => import('./map-info/map-info'), {
  ssr: false,
})

export const BookAppointmentPage = () => {
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

  const onSubmit = handleSubmit((formData: ValidationBookingSchemaType) => {
    setInLocalStorage(BOOKING_INFO, JSON.stringify(formData))

    setModalActive(true)
  })
  const onModalClose = () => {
    setModalActive(false)
  }
  const onCloseNotification = () => {
    setNotification(false)
  }
  const onPaymentHandler = () => {
    reset()
    setModalActive(false)
    setNotification(true)
    removeFromLocalStorage(BOOKING_INFO)
  }

  const localizedTimeSlots = TIMESLOTS.map(item => ({
    ...item,
    label: t(item.label),
  }))

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <MainTitle data-test-id="page-title" color="white" size="xxxxl" as="h1">
          {t('bookAppointment.bookAnAppointment')}
        </MainTitle>
      </Wrapper>
      <BookContainer onSubmit={onSubmit}>
        <Typography size="xxl" marginBt="xxl" as="h3">
          {t('bookAppointment.enterYourPayment')}
        </Typography>
        <BookingBlock>
          <LeftBlock>
            <TextFieldsBlock>
              <TextFieldsStyled
                fieldName="firstName"
                placeholder={t('inputs.firstName')}
              />
              <TextFieldsStyled
                fieldName="lastName"
                placeholder={t('inputs.lastName')}
              />
              <TextFieldsStyled
                fieldName="email"
                placeholder={t('inputs.email')}
              />
              <TextFieldsStyled
                fieldName="phoneNumber"
                placeholder={t('inputs.phoneNumber')}
              />
            </TextFieldsBlock>
            <DateTimeContainer>
              <DateBlock>
                <ControlledCheckboxGroup
                  fieldName="time"
                  label={`${t('bookAppointment.chooseATimeslontOn')} ${labelDate}`}
                  options={localizedTimeSlots}
                />
                <ControlledDatePicker fieldName="date" />
              </DateBlock>
            </DateTimeContainer>
            <ControlledTextarea
              height={80}
              fieldName="message"
              placeholder={t('inputs.message')}
            />
            <PaymentsContainer>
              <PaymentsBlock>
                <Typography size="m" marginBt="s" as="h4">
                  {t('bookAppointment.enterYourPaymentInformation')}
                </Typography>
                <TextFieldPayment
                  fieldName="creditNumber"
                  placeholder={t('inputs.creditCard')}
                />
                <ExpiredCvvBlock>
                  <TextFieldPayment
                    fieldName="expiryDate"
                    placeholder={t('inputs.expiryDate')}
                  />
                  <TextFieldPayment
                    fieldName="cvv"
                    placeholder={t('inputs.cvv')}
                  />
                </ExpiredCvvBlock>
                <TextFieldPayment
                  fieldName="nameOnCard"
                  placeholder={t('inputs.nameOnCard')}
                />
                <PaymentsTypesBlock>
                  <ApplePayIcon />
                  <GooglePayIcon />
                  <VisaIcon />
                  <MasterCardIcon />
                  <AmazonIcon />
                </PaymentsTypesBlock>
                <Typography
                  size="s"
                  fontWeight="s"
                  textAlign="center"
                  marginBt="l"
                >
                  {t('bookAppointment.pleaseBe')}
                </Typography>
                <SubmitBlock>
                  <Button type="submit" fullWidth>
                    {t('bookAppointment.book')}
                  </Button>
                </SubmitBlock>
              </PaymentsBlock>
            </PaymentsContainer>
          </LeftBlock>
          <RightBlock>
            <MapInfo />
          </RightBlock>
        </BookingBlock>
      </BookContainer>
      <Modal
        onClose={onModalClose}
        title={t('bookAppointment.bookingInfo')}
        isOpen={isModalActive}
      >
        <BookingInfo onPaymentSuccess={onPaymentHandler} />
      </Modal>
      {notification && (
        <Notification
          message={t('notification.paymentWasSuccessful')}
          type="success"
          onClose={onCloseNotification}
        />
      )}
    </FormProvider>
  )
}
