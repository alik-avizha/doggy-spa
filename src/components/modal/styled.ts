import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const ModalBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.paddings.m}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  animation: ${fadeInScale} 0.3s ease forwards;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 90%;
    max-width: 90%;
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
`
