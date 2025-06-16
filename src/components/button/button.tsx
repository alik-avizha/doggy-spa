import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { Loader } from '@/components/loader'

import { StyledButton } from './styled'

export const Button: FC<
  PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement> & {
      isLoading?: boolean
      fullWidth?: boolean
    }
> = ({ children, isLoading = false, fullWidth = false, ...buttonsProps }) => (
  <StyledButton {...buttonsProps} isLoading={isLoading} fullWidth={fullWidth}>
    {isLoading ? <Loader /> : children}
  </StyledButton>
)
