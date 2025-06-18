import 'leaflet/dist/leaflet.css'

import type { LatLngExpression } from 'leaflet'
import { Icon } from 'leaflet'
import { useTranslation } from 'react-i18next'
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
            {t('bookAppointment.ourAddress')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.luxeAnimalSpa')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.smitheSt')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.vancouver')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.v6b')}
          </Typography>
        </LeftInfoBlock>
        <RightInfoBlock>
          <Typography size="m">
            {t('bookAppointment.hoursOfOperation')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.sunday')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.monday')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.tuesday')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.wednesday')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.thursday')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.friday')}
          </Typography>
          <Typography size="m" fontWeight="s" marginTp="xs">
            {t('bookAppointment.saturday')}
          </Typography>
        </RightInfoBlock>
      </AddressInfoBlock>
    </Container>
  )
}

export default MapInfo
