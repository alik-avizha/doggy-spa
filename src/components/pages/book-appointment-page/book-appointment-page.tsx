'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { FormProvider } from 'react-hook-form'
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
import { useBookingForm } from '@/hooks'

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
  const { t } = useTranslation()
  const {
    methods,
    isModalActive,
    notification,
    labelDate,
    localizedTimeSlots,
    onSubmit,
    onModalClose,
    onCloseNotification,
    onPaymentHandler,
  } = useBookingForm()

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <MainTitle
          dataTestId="book-appointment-page-title"
          color="white"
          size="xxxxl"
          as="h1"
        >
          {t('bookAppointment.bookAnAppointment')}
        </MainTitle>
      </Wrapper>
      <BookContainer onSubmit={onSubmit}>
        <Typography
          size="xxl"
          marginBt="xxl"
          as="h3"
          dataTestId="book-appointment-page-enter-payment"
        >
          {t('bookAppointment.enterYourPayment')}
        </Typography>
        <BookingBlock>
          <LeftBlock>
            <TextFieldsBlock>
              <TextFieldsStyled
                fieldName="firstName"
                placeholder={t('inputs.firstName')}
                dataTestId="book-appointment-firstName-field"
              />
              <TextFieldsStyled
                fieldName="lastName"
                placeholder={t('inputs.lastName')}
                dataTestId="book-appointment-lastName-field"
              />
              <TextFieldsStyled
                fieldName="email"
                placeholder={t('inputs.email')}
                dataTestId="book-appointment-email-field"
              />
              <TextFieldsStyled
                fieldName="phoneNumber"
                placeholder={t('inputs.phoneNumber')}
                dataTestId="book-appointment-phoneNumber-field"
              />
            </TextFieldsBlock>
            <DateTimeContainer>
              <DateBlock>
                <ControlledCheckboxGroup
                  fieldName="time"
                  label={`${t('bookAppointment.chooseATimeslontOn')} ${labelDate}`}
                  options={localizedTimeSlots}
                  dataTestId="book-appointment-chooseATimeslontOn-field"
                />
                <ControlledDatePicker fieldName="date" />
              </DateBlock>
            </DateTimeContainer>
            <ControlledTextarea
              height={80}
              fieldName="message"
              placeholder={t('inputs.message')}
              dataTestId="book-appointment-message-field"
            />
            <PaymentsContainer>
              <PaymentsBlock>
                <Typography size="m" marginBt="s" as="h4">
                  {t('bookAppointment.enterYourPaymentInformation')}
                </Typography>
                <TextFieldPayment
                  fieldName="creditNumber"
                  placeholder={t('inputs.creditCard')}
                  dataTestId="book-appointment-creditNumber-field"
                />
                <ExpiredCvvBlock>
                  <TextFieldPayment
                    fieldName="expiryDate"
                    placeholder={t('inputs.expiryDate')}
                    dataTestId="book-appointment-expiryDate-field"
                  />
                  <TextFieldPayment
                    fieldName="cvv"
                    placeholder={t('inputs.cvv')}
                    dataTestId="book-appointment-cvv-field"
                  />
                </ExpiredCvvBlock>
                <TextFieldPayment
                  fieldName="nameOnCard"
                  placeholder={t('inputs.nameOnCard')}
                  dataTestId="book-appointment-nameOnCard-field"
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
                  <Button
                    type="submit"
                    fullWidth
                    dataTestId="book-appointment-book-button"
                  >
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
        dataTestId="book-appointment-modal"
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
