import styled from '@emotion/styled'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  height: 493px;
  background-color: #f3ded7;
  border-top: 12px solid #dfb2a9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const MainBlock = styled.div`
  display: flex;
  padding: 60px 20px 0 20px;
  justify-content: space-between;
`
export const LeftBlock = styled.div`
  width: 346px;
`
export const Title = styled(Typography)`
  margin-bottom: 30px;
  font-weight: 700;
`
export const NavigationItem = styled(Typography)`
  margin-bottom: 20px;
  font-weight: 400;
`
export const RightBlock = styled.div`
  width: 251px;
`
export const CenterBlock = styled.div`
  width: 650px;
`
export const SubmitForm = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 20px;
`
export const SubmitButton = styled(Button)`
  padding: 10px 36px;
`
export const IconsBlock = styled.div`
  width: 450px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
`
export const BottomBlock = styled.div`
  height: 52px;
  background-color: #dfb2a9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
`
export const CookiesBlock = styled.div`
  width: 310px;
  display: flex;
  justify-content: space-between;
`
export const PrivacyBlock = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`
