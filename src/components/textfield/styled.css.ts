import styled from '@emotion/styled'

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`
export const SearchIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;

  svg {
    fill: #4c4c4b;
  }
`

export const ButtonAction = styled.button<{ disabled?: boolean }>`
  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 0;

  background: transparent;
  border: 0;
  outline: 0;

  svg {
    fill: ${({ disabled }) => (disabled ? '#4c4c4c' : '#808080')};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

interface FieldProps {
  hasError?: boolean
  typeStyle: 'default' | 'searchType'
}

export const InputField = styled.input<FieldProps>`
  width: 100%;
  padding: 14px 12px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  color: #959fa8;

  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  outline: 0;

  ${({ typeStyle }) =>
    typeStyle === 'searchType' &&
    `
    padding-left: 2.56rem;
    padding-right: 35px;
  `}

  &::placeholder {
    color: #959fa8;
  }

  ${({ hasError }) =>
    hasError &&
    `
    color: red;
    border-color: red;
  `}
`

export const ErrorMessage = styled.p`
  color: red;
  margin: 4px 0 0 0;
  font-size: 0.875rem;
`
