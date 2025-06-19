import styled from '@emotion/styled'

export const BurgerBlock = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.dimensions.laptop}px) {
    display: none;
  }
`
export const BurgerItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.bronzedRose};
  padding: ${({ theme }) => theme.paddings.xl}px 0 0 0;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


  max-height: ${({ isOpen }) => (isOpen ? '600px' : '0')};
  overflow: hidden;
  transition:
    max-height 0.5s ease,
    padding 0.5s ease;

  }
`
export const BurgerButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 100;
  top: 4px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`
