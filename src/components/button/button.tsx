import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'

import { StyledButton } from './styled'

export const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,

  ...buttonsProps
}) => {
  const { pending } = useFormStatus()

  return (
    <StyledButton {...buttonsProps} disabled={pending}>
      {!pending ? children : 'Loading'}
    </StyledButton>
  )
}
