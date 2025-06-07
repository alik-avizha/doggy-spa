import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`
export const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  border: 8px solid #dfb2a9;
`

export const AddressInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftInfoBlock = styled.div`
  width: 140px;
`
export const RightInfoBlock = styled.div`
  width: 240px;
`
export const Description = styled(Typography)`
  margin-top: 10px;
  font-weight: 400;
`
