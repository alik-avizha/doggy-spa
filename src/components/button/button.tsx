import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { Loader } from '@/components/loader'

import { StyledButton } from './styled'

export const Button: FC<
  PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement> & {
      isLoading?: boolean
      fullWidth?: boolean
      dataTestId?: string
    }
> = ({
  children,
  isLoading = false,
  fullWidth = false,
  dataTestId,
  ...buttonsProps
}) => (
  <StyledButton
    {...buttonsProps}
    isLoading={isLoading}
    fullWidth={fullWidth}
    data-testid={dataTestId}
  >
    {isLoading ? <Loader /> : children}
  </StyledButton>
)
