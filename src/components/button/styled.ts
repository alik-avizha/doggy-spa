import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const StyledButton = styled.button<{
  isLoading: boolean
  fullWidth: boolean
}>`
  min-width: 154px;
  border: none;
  cursor: pointer;

  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: ${({ theme }) => theme.paddings.sm}px
    ${({ theme }) => theme.paddings.l}px;
  background-color: ${({ theme }) => theme.colors.pinkKisses};
  font-family: ${({ theme }) => theme.fontFamilies.cormorant}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bronzedRose};
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.7;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
  }
`
