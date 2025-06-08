import styled from '@emotion/styled'

interface CardContainerProps {
  width: number
  height: number
  border: number
}

export const CardContainer = styled.div<CardContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;
  border: ${({ border }) => border}px solid #dfb2a9;
`
