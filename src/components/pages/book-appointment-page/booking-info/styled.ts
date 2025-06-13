import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const BookingInfoBlock = styled.div`
  display: flex;
  gap: 10px;
`
export const Description = styled(Typography)`
  color: gray;
  word-break: break-word;
  white-space: normal;
`
