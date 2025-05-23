import styled from '@emotion/styled'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  width: 970px;
  height: 650px;
  border: 10px solid #dfb2a9;
  padding: 80px 40px 80px 80px;
  display: flex;
  gap: 50px;
  position: absolute;
  z-index: 1;
  top: -150px;
  left: 200px;
  background-color: #ffffff;
`
export const SignBlock = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled(Typography)`
  text-transform: uppercase;
  width: 200px;
  margin-bottom: 40px;
`
export const Description = styled(Typography)`
  width: 280px;
  margin-bottom: 40px;
`
export const StyledButton = styled(Button)`
  width: 138px;
  padding-top: 10px;
  padding-bottom: 5px;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const Text = styled(Typography)`
  width: 230px;
  text-align: center;
`
