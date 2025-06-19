import styled from '@emotion/styled'
import { MapContainer } from 'react-leaflet'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    gap: ${({ theme }) => theme.gap.m}px;
  }
`
export const MapWrapper = styled.div`
  width: 100%;
  height: 500px;

  border: ${({ theme }) => theme.borders.lg}px solid
    ${({ theme }) => theme.colors.softRose};
`
export const Map = styled(MapContainer)`
  width: 100%;
  height: 100%;
`
export const AddressInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    & h5 {
      font-size: ${({ theme }) => theme.fontSizes.s}px;
    }

    & p {
      font-size: ${({ theme }) => theme.fontSizes.x}px;
    }
  }
`
export const LeftInfoBlock = styled.div`
  width: 140px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
  }
`
export const RightInfoBlock = styled.div`
  width: 240px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
  }
`
