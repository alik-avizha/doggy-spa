import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import type { FC } from 'react'

import {
  BookingInfoBlock,
  Container,
  Description,
} from '@/components/booking-info/styled'
import { Gap } from '@/components/gap'
import { Typography } from '@/components/typography'
import { BOOKING_INFO, PAYPAL_OPTIONS } from '@/contstants/constants'
import type { BookInfo } from '@/contstants/types'
import { formatDate } from '@/lib'
import { getObjectFromLocalStorage } from '@/lib/local-storage'

type Props = {
  onPaymentSuccess: () => void
}
export const BookingInfo: FC<Props> = ({ onPaymentSuccess }) => {
  const storedData = getObjectFromLocalStorage(BOOKING_INFO) as
    | BookInfo
    | undefined

  const data: BookInfo = storedData ?? {
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

  const timeInfo = Array.isArray(data.time) ? data.time.join(', ') : ''
  const dateInfo = formatDate(data.date)

  const fields: { label: string; value: string }[] = [
    { label: 'First Name:', value: data.firstName },
    { label: 'Last Name:', value: data.lastName },
    { label: 'Email:', value: data.email },
    { label: 'Phone Number:', value: data.phoneNumber },
    { label: 'Date:', value: dateInfo },
    { label: 'Time:', value: timeInfo },
    { label: 'Message:', value: data.message },
    { label: 'Credit Card Number:', value: data.creditNumber },
    { label: 'Expiry Date:', value: data.expiryDate },
    { label: 'CVV:', value: data.cvv },
    { label: 'Name on Card:', value: data.nameOnCard },
  ]

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <Container>
        {fields.map(({ label, value }) => (
          <BookingInfoBlock key={label}>
            <Typography>{label}</Typography>
            <Description>{value}</Description>
          </BookingInfoBlock>
        ))}
      </Container>
      <Gap size={20} />
      <PayPalButtons
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
