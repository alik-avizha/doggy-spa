import styled from '@emotion/styled'

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

  svg {
    fill: #4c4c4b;
  }
`

export const InputField = styled.input<{
  hasError?: boolean
  typeStyle: 'default' | 'searchType'
}>`
  width: 100%;
  padding: 14px 12px;
  height: 60px;
  font-size: 14px;
  font-weight: 400;
  color: #959fa8;

  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  outline: 0;

  ${({ typeStyle }) =>
    typeStyle === 'searchType' &&
    `
    padding-left: 35px;
    padding-right: 55px;
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
