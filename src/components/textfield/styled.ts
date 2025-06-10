import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

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

interface FieldProps {
  hasError?: boolean
  typeStyle: 'default' | 'searchType'
}

export const InputField = styled.input<FieldProps>`
  width: 100%;
  padding: 14px 12px;
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

export const ErrorMessage = styled(Typography)`
  color: red;
  margin: 4px 0 0 0;
  font-size: 14px;
  font-weight: 400;
`
