import styled from '@emotion/styled'

type CardContainerProps = {
  width: number
  height: number
  border: number
}
export const CardContainer = styled.div<CardContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;
  border: ${({ border }) => border}px solid
    ${({ theme }) => theme.colors.softRose};
`
export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 45px;
  left: 15px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xs}px;
  z-index: 10;
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
  transition: opacity 0.5s ease;
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
`
