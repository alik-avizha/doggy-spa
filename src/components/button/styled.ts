import styled from '@emotion/styled'

export const StyledButton = styled.button<{ isLoading?: boolean }>`
  border-radius: 30px;
  padding: 15px 30px;
  background-color: #e89b93;
  border: none;
  cursor: pointer;
  min-width: 140px;

  font-family: Corporant, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  color: #ffffff;

  &:hover {
    background-color: #e58e85;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    color: #666666;
  }

  ${({ isLoading }) =>
    isLoading &&
    `
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.7; 
  `}
`
