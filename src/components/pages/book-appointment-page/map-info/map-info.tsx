import 'leaflet/dist/leaflet.css'

import type { LatLngExpression } from 'leaflet'
import { Icon } from 'leaflet'
import { Marker, Popup, TileLayer } from 'react-leaflet'

import { Typography } from '@/components/typography'
import { COORDINATES, MAP_INFO_CENTER } from '@/constants'

import {
  AddressInfoBlock,
  Container,
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
        <Typography size="m" as="h5">
          Our Address:
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Luxe Animal Spa
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          80 Smithe St
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Vancouver, BC
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          V6B 1M7
        </Typography>
      </LeftInfoBlock>
      <RightInfoBlock>
        <Typography size="m">Hours of Operation:</Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Sunday - Closed
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Monday 10 a.m.-5:30 p.m.
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Tuesday 10 a.m.-5:30 p.m.
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Wednesday 10 a.m.-5:30 p.m.
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Thursday 10 a.m.-5:30 p.m.
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Friday 10 a.m.-5:30 p.m.
        </Typography>
        <Typography size="m" fontWeight="s" marginTp="xs">
          Saturday 10 a.m.-5:30 p.m.
        </Typography>
      </RightInfoBlock>
    </AddressInfoBlock>
  </Container>
)
export default MapInfo
