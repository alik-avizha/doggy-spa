import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TextAreaStyled = styled.textarea<{
  height: number
  hasError: boolean
}>`
  resize: none;

  height: ${({ height }) => height}px;
  padding: 20px;
  width: 100%;

  font-size: 14px;
  font-weight: 400;
  font-family: Cormorant, sans-serif;
  line-height: 100%;
  color: #4c4c4b;

  background-color: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  outline: none;

  ${({ hasError }) =>
    hasError &&
    `
    color: red;
    border-color: red;
  `}
`
