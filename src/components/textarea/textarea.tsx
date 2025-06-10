import { Container, ErrorMessage, TextAreaStyled } from './styled'

export type TextAreaProps = {
  errorMessage?: string
  placeholder?: string
  disabled?: boolean
  height: number
}

export const TextAreaField = (props: TextAreaProps) => {
  const { errorMessage, placeholder, disabled, height, ...rest } = props

  return (
    <Container>
      <TextAreaStyled
        hasError={!!errorMessage}
        placeholder={placeholder}
        disabled={disabled}
        height={height}
        {...rest}
      />
      <ErrorMessage variant="size_20">{errorMessage}</ErrorMessage>
    </Container>
  )
}
