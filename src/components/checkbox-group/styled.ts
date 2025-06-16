import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.s}px;
`
export const Label = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.margins.xs}px;
`
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
`
