import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Border = styled.div`
  width: 737px;
  border: 1px solid #000000;
  margin-bottom: 50px;
`

export const InfoWrapper = styled.div`
  width: 1047px;
  margin-bottom: 50px;
`

export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 50px;
`

export const ServiceTitle = styled(Typography)`
  margin-top: 50px;
  margin-bottom: 10px;
  text-align: center;
`
export const ServicePrice = styled(Typography)`
  margin-bottom: 30px;
  text-align: center;
`
export const ServiceDescription = styled(Typography)`
  margin-bottom: 50px;
  font-weight: 400;
  text-align: center;
`
