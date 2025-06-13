import styled from '@emotion/styled'
import Link from 'next/link'

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

export const NavigationItem = styled(Link)`
  display: block;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 26px;
  line-height: 100%;
  font-weight: 400;
  color: #4c4c4b;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`
export const RightBlock = styled.div`
  width: 251px;
`
export const CenterBlock = styled.div`
  width: 650px;
`
export const SubmitForm = styled.form`
  display: flex;
  gap: 24px;
  align-items: start;
  margin-bottom: 20px;
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
