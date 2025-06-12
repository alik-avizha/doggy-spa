import type { ChangeEvent } from 'react'

import { ErrorMessage } from '@/components/errror-message'

import { Container, TextAreaStyled } from './styled'

export type TextAreaProps = {
  errorMessage?: string
  placeholder?: string
  disabled?: boolean
  height: number
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextAreaField = (props: TextAreaProps) => {
  const { errorMessage, placeholder, disabled, height, onChange, ...rest } =
    props

  return (
    <Container>
      <TextAreaStyled
        hasError={!!errorMessage}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        height={height}
        {...rest}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  )
}
