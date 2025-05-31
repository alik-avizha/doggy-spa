import GoogleMapReact from 'google-map-react'

import { MarkerIcon } from '@/assets/markerIcon'
import { Typography } from '@/components/typography'

import {
  AddressInfoBlock,
  Container,
  Description,
  LeftInfoBlock,
  MapWrapper,
  RightInfoBlock,
} from './styled.css'

const DEFAULT_POSITION = {
  center: {
    lat: 53.9174,
    lng: 27.5596,
  },
  zoom: 15,
}

const MAP_OPTIONS = {
  fullscreenControl: false,
  mapTypeControl: false,
  keyboardShortcuts: false,
}

export const MapInfo = () => (
  <Container>
    <MapWrapper>
      <GoogleMapReact
        defaultCenter={DEFAULT_POSITION.center}
        defaultZoom={DEFAULT_POSITION.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={MAP_OPTIONS}
      >
        <MarkerIcon
          lat={DEFAULT_POSITION.center.lat}
          lng={DEFAULT_POSITION.center.lng}
        />
      </GoogleMapReact>
    </MapWrapper>
    <AddressInfoBlock>
      <LeftInfoBlock>
        <Typography variant="size_20">Our Address:</Typography>
        <Description variant="size_20">Luxe Animal Spa</Description>
        <Description variant="size_20">80 Smithe St</Description>
        <Description variant="size_20">Vancouver, BC</Description>
        <Description variant="size_20">V6B 1M7</Description>
      </LeftInfoBlock>
      <RightInfoBlock>
        <Typography variant="size_20">Hours of Operation:</Typography>
        <Description variant="size_20">Sunday - Closed</Description>
        <Description variant="size_20">Monday 10 a.m.-5:30 p.m.</Description>
        <Description variant="size_20">Tuesday 10 a.m.-5:30 p.m.</Description>
        <Description variant="size_20">Wednesday 10 a.m.-5:30 p.m.</Description>
        <Description variant="size_20">Thursday 10 a.m.-5:30 p.m.</Description>
        <Description variant="size_20">Friday 10 a.m.-5:30 p.m.</Description>
        <Description variant="size_20">Saturday 10 a.m.-5:30 p.m.</Description>
      </RightInfoBlock>
    </AddressInfoBlock>
  </Container>
)
