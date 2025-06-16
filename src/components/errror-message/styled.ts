import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.colors.error};
  margin: ${({ theme }) => theme.margins.xxs}px 0 0 0;
`
