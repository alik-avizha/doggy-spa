import styled from '@emotion/styled'

export const StyledAnchor = styled.a<{ isActive: boolean }>`
  color: ${({ theme }) => theme.colors.charCoal};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  position: relative;
  display: inline-block;
  padding-bottom: ${({ theme }) => theme.paddings.xs}px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 6px;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    background-color: ${({ theme }) => theme.colors.pinkKisses};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.pinkKisses};
    transition: color 0.3s ease;
  }
`
