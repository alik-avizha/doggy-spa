import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: 0 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled(Typography)`
  margin-bottom: 50px;
  text-align: center;
`
export const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 423px;
  gap: 50px;
`
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const Text = styled(Typography)`
  margin-bottom: 5px;
`

export const Price = styled(Typography)`
  margin-top: 10px;
  font-weight: 700;
  font-family: Cormorant, sans-serif;
`
