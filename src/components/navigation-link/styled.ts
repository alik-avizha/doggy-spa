import styled from '@emotion/styled'

export const StyledAnchor = styled.a<{ isActive: boolean }>`
  position: relative;
  display: inline-block;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.charCoal};
  font-family: ${({ theme }) => theme.fontFamilies.cormorant}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  padding-bottom: ${({ theme }) => theme.paddings.xs}px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 6px;
    transition: width 0.3s ease;

    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    background-color: ${({ theme }) => theme.colors.pinkKisses};
  }

  &:hover {
    transition: color 0.3s ease;

    color: ${({ theme }) => theme.colors.pinkKisses};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.mL}px;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.black : theme.colors.white};
    transition: color 0.3s;

    &::after {
      width: 0;
    }

    &:hover {
      color: ${({ theme, isActive }) =>
        isActive ? theme.colors.black : theme.colors.white};
      transition: none;
    }
  }
`
