import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  width: 1230px;

  padding: ${({ theme }) => theme.paddings.xxxl}px 0
    ${({ theme }) => theme.paddings.massive}px 0;
  margin: ${({ theme }) => theme.margins.none} auto;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
    padding: ${({ theme }) => theme.paddings.xxl}px
      ${({ theme }) => theme.paddings.m}px;
  }
`
export const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${({ theme }) => theme.margins.huge}px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xxxl}px;
    gap: ${({ theme }) => theme.margins.l}px;
    flex-direction: column;
  }
`
export const TextBlock = styled.div`
  width: 586px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 100%;
  }
`
export const Description = styled(Typography)`
  white-space: pre-line;
`
