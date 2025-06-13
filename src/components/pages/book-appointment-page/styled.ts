import styled from '@emotion/styled'

import { ControlledTextField } from '@/components/controlled-fields'
import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  height: 834px;
  background-image: url('/images/autri-taheri.webp');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;
`
export const MainTitle = styled(Typography)`
  position: absolute;
  left: 100px;
  top: 10%;
  width: 478px;
  color: white;
`
export const BookContainer = styled.form`
  padding: 100px 50px;
`
export const BookingBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LeftBlock = styled.div`
  width: 750px;
`
export const RightBlock = styled.div`
  width: 495px;
`
export const TextFieldsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
`
export const TextFieldsStyled = styled(ControlledTextField)`
  height: 60px;
`
export const DateTimeContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`
export const DateBlock = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PaymentsContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const PaymentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 486px;
`
export const TextFieldPayment = styled(ControlledTextField)`
  height: 45px;
`
export const ExpiredCvvBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`
export const PaymentsTypesBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`
