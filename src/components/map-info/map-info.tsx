import 'leaflet/dist/leaflet.css'

import type { LatLngExpression } from 'leaflet'
import { Icon } from 'leaflet'
import { Marker, Popup, TileLayer } from 'react-leaflet'

import { Typography } from '@/components/typography'
import { COORDINATES, MAP_INFO_CENTER } from '@/contstants/constants'

import {
  AddressInfoBlock,
  Container,
  Description,
  LeftInfoBlock,
  Map,
  MapWrapper,
  RightInfoBlock,
} from './styled'

const icon = new Icon({
  iconUrl: '/assets/marker.svg',
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
})
const MapInfo = () => (
  <Container>
    <MapWrapper>
      <Map
        center={MAP_INFO_CENTER as LatLngExpression}
        zoom={17}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {COORDINATES.map(({ gps, popUp }) => (
          <Marker position={gps as LatLngExpression} icon={icon} key={popUp}>
            <Popup>{popUp}</Popup>
          </Marker>
        ))}
      </Map>
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
export default MapInfo
