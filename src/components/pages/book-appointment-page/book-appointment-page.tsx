'use client'

import { TextAreaField } from '../../textarea'

import { Button } from '@/components/button'
import { DateTimePicker } from '@/components/date-picker'
import { Gap } from '@/components/gap'
import {
  AmazonIcon,
  ApplePayIcon,
  GooglePayIcon,
  MasterCardIcon,
  VisaIcon,
} from '@/components/icons'
import { MapInfo } from '@/components/map-info'
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
  TextFieldPayment,
  TextFieldsBlock,
  TextFieldsStyled,
  Wrapper,
} from './styled'

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
              <Button>Book Appointment</Button>
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
