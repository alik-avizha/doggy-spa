import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl}px 0
    ${({ theme }) => theme.paddings.massive}px 0;
  width: 1230px;
  margin: ${({ theme }) => theme.margins.none} auto;
`
export const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.margins.huge}px;
`
export const TextBlock = styled.div`
  width: 586px;
`
export const Description = styled(Typography)`
  white-space: pre-line;
`
