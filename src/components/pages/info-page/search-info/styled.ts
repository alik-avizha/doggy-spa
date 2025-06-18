import styled from '@emotion/styled'
import Image from 'next/image'

export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.tnHouse};
  padding: ${({ theme }) => theme.paddings.xl}px 0;
  margin-bottom: ${({ theme }) => theme.margins.huge}px;
`
export const ImageStyled = styled(Image)`
  width: 730px;
  height: 486px;

  margin-bottom: ${({ theme }) => theme.margins.l}px;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.s}px;
`
