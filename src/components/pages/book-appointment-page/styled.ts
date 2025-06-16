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
`
export const BookContainer = styled.form`
  padding: ${({ theme }) => theme.paddings.massive}px
    ${({ theme }) => theme.paddings.xl}px;
`
export const BookingBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LeftBlock = styled.div`
  width: 750px;
`
export const RightBlock = styled.div`
  width: 496px;
`
export const TextFieldsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.gap.xl}px;
`
export const TextFieldsStyled = styled(ControlledTextField)`
  height: 60px;
`
export const DateTimeContainer = styled.div`
  margin: ${({ theme }) => theme.margins.xxl}px 0
    ${({ theme }) => theme.margins.xxl}px 0;
`
export const DateBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PaymentsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.margins.xxl}px;
`
export const PaymentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 486px;
`
export const TextFieldPayment = styled(ControlledTextField)`
  height: 45px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
`
export const ExpiredCvvBlock = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.gap.s}px;
`
export const PaymentsTypesBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.xs}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
`
export const SubmitBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 320px;
`
