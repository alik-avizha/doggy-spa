import type { FC, ReactNode } from 'react'

import { ErrorText } from '@/components/errror-message/styled'

type Props = {
  children: ReactNode
}
export const ErrorMessage: FC<Props> = ({ children }) => (
  <ErrorText>{children}</ErrorText>
)
