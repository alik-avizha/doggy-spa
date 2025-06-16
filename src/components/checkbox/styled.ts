import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CheckBoxWithLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${({ theme }) => theme.margins.xxs}px 0;
`
export const CheckboxStyled = styled.input`
  display: none;
`
export const CustomCheckbox = styled.label<{ checked: boolean }>`
  width: 24px;
  height: 22px;
  border: ${({ theme }) => theme.borders.sm}px solid
    ${({ theme }) => theme.colors.charCoal};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  position: relative;
  margin-right: ${({ theme }) => theme.margins.xs}px;
  transition: background-color 0.2s;
  cursor: pointer;

  ${({ checked, theme }) =>
    checked &&
    css`
      background-color: ${theme.colors.pinkKisses};
      border-color: ${theme.colors.pinkKisses};
    `}

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 ${({ theme }) => theme.borders.sm}px
      ${({ theme }) => theme.borders.sm}px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${props =>
    props.checked &&
    `
    &::after {
      opacity: 1;
    }
  `}
`
