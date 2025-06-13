import type { FC, ReactNode } from 'react'

import { ErrorText } from './styled'

type Props = {
  children: ReactNode
}
export const ErrorMessage: FC<Props> = ({ children }) => (
  <ErrorText>{children}</ErrorText>
)
