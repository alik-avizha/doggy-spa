import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px;
`
export const Border = styled.div`
  width: 738px;
  border: ${({ theme }) => theme.borders.xs}px solid
    ${({ theme }) => theme.colors.black};
`
export const InfoWrapper = styled.div`
  width: 1048px;
  margin: ${({ theme }) => theme.margins.xxl}px 0;
`

export const Description = styled(Typography)`
  white-space: pre-line;
`
