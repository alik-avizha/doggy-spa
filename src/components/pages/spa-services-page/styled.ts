import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    & h2 {
      font-size: ${({ theme }) => theme.fontSizes.xxl}px;
      margin-bottom: ${({ theme }) => theme.margins.xxl}px;
    }
    padding: ${({ theme }) => theme.paddings.xl}px
      ${({ theme }) => theme.paddings.m}px ${({ theme }) => theme.paddings.xl}px;
  }
`
export const Border = styled.div`
  width: 738px;

  border: ${({ theme }) => theme.borders.xs}px solid
    ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 100%;
  }
`
export const InfoWrapper = styled.div`
  width: 1048px;

  margin: ${({ theme }) => theme.margins.xxl}px 0;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 100%;
    margin: 0;

    & h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl}px;
    }

    & p {
      font-size: ${({ theme }) => theme.fontSizes.l}px;
    }
  }
`

export const Description = styled(Typography)`
  white-space: pre-line;
`
