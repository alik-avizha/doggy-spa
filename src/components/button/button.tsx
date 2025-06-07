import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { StyledButton } from './styled'

export const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,

  ...buttonsProps
}) => <StyledButton {...buttonsProps}>{children}</StyledButton>
