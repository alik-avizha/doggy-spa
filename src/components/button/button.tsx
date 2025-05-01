import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { StyledButton } from '@/components/button/styled.css'

export const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,

  ...buttonsProps
}) => <StyledButton {...buttonsProps}>{children}</StyledButton>
