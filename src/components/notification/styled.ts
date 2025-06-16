import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`

export const NotificationContainer = styled.div<{
  visible: boolean
  background: string
}>`
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 300px;
  padding: ${({ theme }) => theme.paddings.sm}px
    ${({ theme }) => theme.paddings.m}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  color: white;
  background-color: ${({ background }) => background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.3s forwards;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  z-index: 1000;
`
