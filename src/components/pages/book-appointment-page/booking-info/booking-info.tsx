import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Typography } from '@/components/typography'
import { BOOKING_INFO, PAYPAL_OPTIONS } from '@/constants'
import { formatDateRu, getObjectFromLocalStorage } from '@/lib'
import type { BookInfo } from '@/types'

import { BookingInfoBlock, Container, Description } from './styled'

const DEFAULT_BOOKING_INFO: BookInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  time: [],
  date: '',
  creditNumber: '',
  expiryDate: '',
  cvv: '',
  nameOnCard: '',
  message: '',
}

type Props = {
  onPaymentSuccess: () => void
}
export const BookingInfo: FC<Props> = ({ onPaymentSuccess }) => {
  const { t } = useTranslation()

  const storedData = getObjectFromLocalStorage(BOOKING_INFO) as
    | BookInfo
    | undefined

  const data: BookInfo = storedData ?? DEFAULT_BOOKING_INFO
  const timeInfo = Array.isArray(data.time) ? data.time.join(', ') : ''
  const dateInfo = formatDateRu(data.date)

  const fields = [
    { label: t('inputs.firstName'), value: data.firstName },
    { label: t('inputs.lastName'), value: data.lastName },
    { label: t('inputs.email'), value: data.email },
    { label: t('inputs.phoneNumber'), value: data.phoneNumber },
    { label: t('bookAppointment.date'), value: dateInfo },
    { label: t('bookAppointment.time'), value: timeInfo },
    { label: t('bookAppointment.message'), value: data.message },
    { label: t('inputs.creditCard'), value: data.creditNumber },
    { label: t('inputs.expiryDate'), value: data.expiryDate },
    { label: t('inputs.cvv'), value: data.cvv },
    { label: t('inputs.nameOnCard'), value: data.nameOnCard },
  ]

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <Container data-testid="booking-info-container">
        {fields.map(({ label, value }) => (
          <BookingInfoBlock key={label}>
            <Typography>{label}</Typography>
            <Description>{value}</Description>
          </BookingInfoBlock>
        ))}
      </Container>
      <PayPalButtons
        data-testid="booking-info-paypal-button"
        onApprove={async (data, actions) => {
          if (actions.order) {
            await actions.order.capture()
            onPaymentSuccess()
          }
        }}
      />
    </PayPalScriptProvider>
  )
}
