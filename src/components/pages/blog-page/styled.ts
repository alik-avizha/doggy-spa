import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px
    ${({ theme }) => theme.paddings.massive}px
    ${({ theme }) => theme.paddings.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    padding: ${({ theme }) => theme.paddings.xxl}px
      ${({ theme }) => theme.paddings.m}px;
  }
`
export const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${({ theme }) => theme.margins.xxl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xxxl}px;
    gap: ${({ theme }) => theme.margins.l}px;
    flex-direction: column;
  }
`
export const TextBlock = styled.div`
  width: 720px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 100%;
  }
`
export const Description = styled(Typography)`
  white-space: pre-line;
`
