import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { Container, ErrorMessage, TextAreaStyled } from './styled'

export type TextAreaProps = {
  errorMessage?: string
  placeholder?: string
  disabled?: boolean
  height: number
} & ComponentPropsWithoutRef<'textarea'>

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { className, errorMessage, placeholder, disabled, height, ...rest } =
      props

    return (
      <Container>
        <TextAreaStyled
          placeholder={placeholder}
          disabled={disabled}
          height={height}
          {...rest}
          ref={ref}
        />
        <ErrorMessage variant="size_20">{errorMessage}</ErrorMessage>
      </Container>
    )
  }
)
