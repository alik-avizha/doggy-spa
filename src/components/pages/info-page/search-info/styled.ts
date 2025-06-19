import styled from '@emotion/styled'
import Image from 'next/image'

export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.tnHouse};
  padding: ${({ theme }) => theme.paddings.xl}px 0;
  margin-bottom: ${({ theme }) => theme.margins.huge}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-bottom: ${({ theme }) => theme.margins.l}px;

    & p {
      font-size: ${({ theme }) => theme.fontSizes.xl}px;
    }
  }
`
export const ImageStyled = styled(Image)`
  width: 730px;
  height: 486px;

  margin-bottom: ${({ theme }) => theme.margins.l}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
    height: 100%;
  }
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.s}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    & p {
      font-size: ${({ theme }) => theme.fontSizes.l}px;
    }
  }
`
