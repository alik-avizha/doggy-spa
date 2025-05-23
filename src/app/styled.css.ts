import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  height: 768px;
  background-image: url('/images/doggy.webp');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;
`

export const InfoBlock = styled.div`
  position: absolute;
  left: 40px;
  bottom: 20%;
  width: 499px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled(Typography)`
  text-align: center;
  margin-bottom: 50px;
`

export const SignUpWrapper = styled.div`
  margin-left: 100px;
  position: relative;
  margin-top: 200px;
`
