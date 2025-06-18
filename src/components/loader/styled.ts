import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  border-top-color: ${({ theme }) => theme.colors.white};
`
