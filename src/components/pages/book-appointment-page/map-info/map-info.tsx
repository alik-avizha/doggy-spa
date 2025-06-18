import 'leaflet/dist/leaflet.css'

import type { LatLngExpression } from 'leaflet'
import { Icon } from 'leaflet'
import { useTranslation } from 'react-i18next'
import { Marker, Popup, TileLayer } from 'react-leaflet'

import { Typography } from '@/components/typography'
import {
  ADDRESS_LINES,
  CONFIGURATION_MAP,
  COORDINATES,
  MAP_INFO_CENTER,
  OPERATION_DAYS,
} from '@/constants'

import {
  AddressInfoBlock,
  Container,
  LeftInfoBlock,
  Map,
  MapWrapper,
  RightInfoBlock,
} from './styled'

const MARKER_ICON = new Icon({
  iconUrl: '/assets/marker.svg',
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
})

const MapInfo = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <MapWrapper>
        <Map
          center={MAP_INFO_CENTER as LatLngExpression}
          zoom={17}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            attribution={CONFIGURATION_MAP.attribution}
            url={CONFIGURATION_MAP.url}
          />
          {COORDINATES.map(({ gps, popUp }) => (
            <Marker
              position={gps as LatLngExpression}
              icon={MARKER_ICON}
              key={popUp}
            >
              <Popup>{popUp}</Popup>
            </Marker>
          ))}
        </Map>
      </MapWrapper>
      <AddressInfoBlock>
        <LeftInfoBlock>
          <Typography size="m" as="h5">
            {t('bookAppointment.ourAddress')}
          </Typography>
          {ADDRESS_LINES.map(line => (
            <Typography key={line} size="m" fontWeight="s" marginTp="xs">
              {t(line)}
            </Typography>
          ))}
        </LeftInfoBlock>
        <RightInfoBlock>
          <Typography size="m">
            {t('bookAppointment.hoursOfOperation')}
          </Typography>
          {OPERATION_DAYS.map(day => (
            <Typography key={day} size="m" fontWeight="s" marginTp="xs">
              {t(day)}
            </Typography>
          ))}
        </RightInfoBlock>
      </AddressInfoBlock>
    </Container>
  )
}

export default MapInfo
