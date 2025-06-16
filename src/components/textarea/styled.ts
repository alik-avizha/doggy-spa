import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`
export const TextAreaStyled = styled.textarea<{
  height: number
  hasError: boolean
}>`
  resize: none;

  height: ${({ height }) => height}px;
  padding: ${({ theme }) => theme.paddings.m}px;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.x}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-family: ${({ theme }) => theme.fontFamilies.cormorant}, sans-serif;
  color: ${({ theme }) => theme.colors.charCoal};

  background-color: transparent;
  border: ${({ theme }) => theme.borders.xs}px solid
    ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  outline: none;

  ${({ hasError, theme }) =>
    hasError &&
    css`
      color: ${theme.colors.error};
      border-color: ${theme.colors.error};
    `}
`
