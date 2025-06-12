import styled from '@emotion/styled'

export const StyledAnchor = styled.a<{ isActive: boolean }>`
  color: #4c4c4b;
  text-decoration: none;
  font-family: Cormorant, sans-serif;
  font-weight: 700;
  font-size: 26px;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 6px;
    border-radius: 4px;
    background-color: #e89b93;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #e89b93;
    transition: color 0.3s ease;
  }
`
