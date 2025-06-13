'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import {
  ControlledCheckboxGroup,
  ControlledDatePicker,
  ControlledTextarea,
} from '@/components/controlled-fields'
import { Gap } from '@/components/gap'
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
import { formatDateEn } from '@/lib'
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
  TextFieldPayment,
  TextFieldsBlock,
  TextFieldsStyled,
  Wrapper,
} from './styled'

const MapInfo = dynamic(() => import('./map-info/map-info'), {
  ssr: false,
})
export const BookAppointmentPage = () => {
  const [isModalActive, setModalActive] = useState(false)
  const [notification, setNotification] = useState(false)

  const methods = useForm<ValidationBookingSchemaType>({
    defaultValues: BOOKING_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: yupResolver(validationBookingSchema),
  })
  const { handleSubmit, watch, reset } = methods

  const date = watch('date')

  const labelDate = date ? formatDateEn(date) : ''

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

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <MainTitle data-test-id="page-title" size={70}>
          Book An Appointment With Our Groom Specialist Today!
        </MainTitle>
      </Wrapper>
      <BookContainer onSubmit={onSubmit}>
        <Typography size={40}>Enter your information here</Typography>
        <Gap size={50} />
        <BookingBlock>
          <LeftBlock>
            <TextFieldsBlock>
              <TextFieldsStyled
                fieldName="firstName"
                placeholder="First name"
              />
              <TextFieldsStyled fieldName="lastName" placeholder="Last name" />
              <TextFieldsStyled fieldName="email" placeholder="Email" />
              <TextFieldsStyled
                fieldName="phoneNumber"
                placeholder="Phone Number"
              />
            </TextFieldsBlock>
            <DateTimeContainer>
              <DateBlock>
                <ControlledCheckboxGroup
                  fieldName="time"
                  label={`Choose a timeslot on ${labelDate}`}
                  options={TIMESLOTS}
                />
                <ControlledDatePicker fieldName="date" />
              </DateBlock>
            </DateTimeContainer>
            <ControlledTextarea
              height={80}
              fieldName="message"
              placeholder="Any special requests for your pet(s)..."
            />
            <Gap size={50} />
            <PaymentsContainer>
              <PaymentsBlock>
                <Typography size={20}>
                  Enter your payment information
                </Typography>
                <Gap size={20} />
                <TextFieldPayment
                  fieldName="creditNumber"
                  placeholder="Credit Card Number"
                />
                <Gap size={20} />
                <ExpiredCvvBlock>
                  <TextFieldPayment
                    fieldName="expiryDate"
                    placeholder="Expiry Date"
                  />
                  <TextFieldPayment fieldName="cvv" placeholder="CVV" />
                </ExpiredCvvBlock>
                <Gap size={20} />
                <TextFieldPayment
                  fieldName="nameOnCard"
                  placeholder="Name on Card"
                />
                <Gap size={20} />
                <PaymentsTypesBlock>
                  <ApplePayIcon />
                  <GooglePayIcon />
                  <VisaIcon />
                  <MasterCardIcon />
                  <AmazonIcon />
                </PaymentsTypesBlock>
                <Gap size={20} />
                <Typography size={16} fontWeight={400} textAlign="center">
                  Please be advised cancelling within 24 hours of your scheduled
                  appointment will result in a cancellation fee of $300.00.
                </Typography>
                <Gap size={30} />
                <Button type="submit">Book Appointment</Button>
              </PaymentsBlock>
            </PaymentsContainer>
          </LeftBlock>
          <RightBlock>
            <MapInfo />
          </RightBlock>
        </BookingBlock>
      </BookContainer>
      <Modal onClose={onModalClose} title="Booking Info" isOpen={isModalActive}>
        <BookingInfo onPaymentSuccess={onPaymentHandler} />
      </Modal>
      {notification && (
        <Notification
          message="Payment was successful"
          type="success"
          onClose={onCloseNotification}
        />
      )}
    </FormProvider>
  )
}
