import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const Price = styled(Typography)`
  font-weight: 700;
  font-family: Cormorant, sans-serif;
`
