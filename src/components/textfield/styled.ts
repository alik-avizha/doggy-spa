import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`
export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`
export const SearchIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`
export const InputField = styled.input<{
  hasError?: boolean
  typeStyle: 'default' | 'searchType'
}>`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.sm}px
    ${({ theme }) => theme.paddings.xs}px;
  height: 60px;
  font-size: ${({ theme }) => theme.fontSizes.x}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.slateGray};

  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.xs}px solid
    ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  outline: 0;

  ${({ typeStyle, theme }) =>
    typeStyle === 'searchType' &&
    css`
      padding: 0 ${theme.paddings.xl}px 0 ${theme.paddings.l}px;
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.slateGray};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      color: ${theme.colors.error};
      border-color: ${theme.colors.error};
    `}
`
