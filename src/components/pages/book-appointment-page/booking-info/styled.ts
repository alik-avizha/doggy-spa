import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.s}px;
  margin: ${({ theme }) => theme.margins.s}px;
`
export const BookingInfoBlock = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.xs}px;
`
export const Description = styled(Typography)`
  color: gray;
  word-break: break-word;
  white-space: normal;
`
