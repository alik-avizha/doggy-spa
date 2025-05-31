import React from 'react'

import { AmazonIcon } from '@/assets/amazonIcon'
import { ApplePayIcon } from '@/assets/applePayIcon'
import { GooglePayIcon } from '@/assets/googlePayIcon'
import { MasterCardIcon } from '@/assets/masterCardIcon'
import { VisaIcon } from '@/assets/visaIcon'
import { DateTimePicker } from '@/components/date-picker/date-picker'
import { Gap } from '@/components/gap/gap'
import { MapInfo } from '@/components/map-info/map-info'
import { TextAreaField } from '@/components/textarea'
import { Typography } from '@/components/typography'

import {
  BookContainer,
  BookingBlock,
  ExpiredCvvBlock,
  LeftBlock,
  MainTitle,
  PaymentsBlock,
  PaymentsContainer,
  PaymentsTypesBlock,
  RightBlock,
  StyledButton,
  TextFieldPayment,
  TextFieldsBlock,
  TextFieldsStyled,
  Wrapper,
} from './styled.css'

export const BookAppointmentPage = () => (
  <>
    <Wrapper>
      <MainTitle data-test-id="page-title" variant="size_70">
        Book An Appointment With Our Groom Specialist Today!
      </MainTitle>
    </Wrapper>
    <BookContainer>
      <Typography variant="size_40">Enter your information here</Typography>
      <Gap size={50} />
      <BookingBlock>
        <LeftBlock>
          <TextFieldsBlock>
            <TextFieldsStyled placeholder="First name" />
            <TextFieldsStyled placeholder="Last name" />
            <TextFieldsStyled placeholder="Email" />
            <TextFieldsStyled placeholder="Phone number" />
          </TextFieldsBlock>
          <DateTimePicker />
          <TextAreaField
            height={80}
            placeholder="Any special requests for your pet(s)..."
          />
          <Gap size={50} />
          <PaymentsContainer>
            <PaymentsBlock>
              <Typography variant="size_20">
                Enter your payment information
              </Typography>
              <Gap size={20} />
              <TextFieldPayment placeholder="Credit Card Number" />
              <ExpiredCvvBlock>
                <TextFieldPayment placeholder="Expiry Date" />
                <TextFieldPayment placeholder="CVV" />
              </ExpiredCvvBlock>
              <TextFieldPayment placeholder="Name on Card" />
              <PaymentsTypesBlock>
                <ApplePayIcon />
                <GooglePayIcon />
                <VisaIcon />
                <MasterCardIcon />
                <AmazonIcon />
              </PaymentsTypesBlock>
              <Gap size={20} />
              <Typography variant="size_16" textAlign="center">
                Please be advised cancelling within 24 hours of your scheduled
                appointment will result in a cancellation fee of $300.00.
              </Typography>
              <Gap size={30} />
              <StyledButton>Book Appointment</StyledButton>
            </PaymentsBlock>
          </PaymentsContainer>
        </LeftBlock>
        <RightBlock>
          <MapInfo />
        </RightBlock>
      </BookingBlock>
    </BookContainer>
  </>
)
