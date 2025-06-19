import styled from '@emotion/styled'

export const CardContainer = styled.div<{
  width: number
  height: number
  border: number
}>`
  position: relative;
  overflow: hidden;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: ${({ border }) => border}px solid
    ${({ theme }) => theme.colors.softRose};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    max-width: 100%;
    max-height: 100%;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 45px;
  left: 15px;

  gap: ${({ theme }) => theme.gap.xs}px;
`
export const CircleButton = styled.button<{ active: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ active }) => (active ? 'red' : 'black')};
  transition: background-color 0.3s ease;
`
export const ImageWrapper = styled.div<{
  active: boolean
  width: number
  height: number
}>`
  position: absolute;
  top: 0;
  left: 0;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  transition: opacity 0.5s ease;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    max-width: 100%;
    max-height: 100%;
  }
`
