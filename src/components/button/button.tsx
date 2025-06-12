import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { Loader } from '@/loader'

import { StyledButton } from './styled'

export const Button: FC<
  PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }
> = ({ children, isLoading = false, ...buttonsProps }) => (
  <StyledButton {...buttonsProps} isLoading={isLoading}>
    {isLoading ? <Loader /> : children}
  </StyledButton>
)
