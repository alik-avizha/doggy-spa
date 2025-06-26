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

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    left: 20px;
    top: 50%;
    width: 90%;
    font-size: ${({ theme }) => theme.fontSizes.xxxl}px;
  }
`
export const BookContainer = styled.form`
  padding: ${({ theme }) => theme.paddings.massive}px
    ${({ theme }) => theme.paddings.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    padding: ${({ theme }) => theme.paddings.xl}px
      ${({ theme }) => theme.paddings.m}px;
    & h3 {
      text-align: center;
    }
  }
`
export const BookingBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    gap: ${({ theme }) => theme.gap.xl}px;
    justify-content: center;
    flex-wrap: wrap;
  }
`
export const LeftBlock = styled.div`
  width: 750px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
  }
`
export const RightBlock = styled.div`
  width: 496px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
  }
`
export const TextFieldsBlock = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.gap.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    gap: ${({ theme }) => theme.gap.m}px;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.s}px;
  }
`
export const TextFieldsStyled = styled(ControlledTextField)`
  height: 60px;
`
export const DateTimeContainer = styled.div`
  margin: ${({ theme }) => theme.margins.xxl}px 0
    ${({ theme }) => theme.margins.xxl}px 0;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin: ${({ theme }) => theme.margins.l}px 0
      ${({ theme }) => theme.margins.l}px 0;
  }
`
export const DateBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.s}px;

    & > div:nth-of-type(1) {
      order: 2;
    }
    & > div:nth-of-type(2) {
      order: 1;
    }
  }
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

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 100%;
  }
`
export const TextFieldPayment = styled(ControlledTextField)`
  height: 45px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    height: 60px;
  }
`
export const ExpiredCvvBlock = styled.div`
  display: flex;
  width: 100%;

  gap: ${({ theme }) => theme.gap.s}px;
  margin: ${({ theme }) => theme.margins.s}px 0;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    flex-direction: column;
  }
`
export const PaymentsTypesBlock = styled.div`
  display: flex;
  justify-content: center;

  gap: ${({ theme }) => theme.gap.xs}px;
  margin: ${({ theme }) => theme.margins.s}px 0;
`
export const SubmitBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 320px;
`
