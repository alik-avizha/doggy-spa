import styled from '@emotion/styled'
import Link from 'next/link'

export const Wrapper = styled.div`
  height: 492px;
  background-color: ${({ theme }) => theme.colors.tnHouse};
  border-top: ${({ theme }) => theme.borders.xxl}px solid
    ${({ theme }) => theme.colors.softRose};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const MainBlock = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.paddings.xxl}px
    ${({ theme }) => theme.paddings.m}px 0 ${({ theme }) => theme.paddings.m}px;
  justify-content: space-between;
`
export const LeftBlock = styled.div`
  width: 346px;
`
export const NavigationItem = styled(Link)`
  display: block;
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  line-height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.charCoal};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`

export const NetworkItem = styled(Link)`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`
export const PrivacyItem = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  line-height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.charCoal};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`
export const RightBlock = styled.div`
  width: 250px;
`
export const CenterBlock = styled.div`
  width: 650px;
`
export const SubmitForm = styled.form`
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.gap.m}px;
  margin-bottom: ${({ theme }) => theme.margins.xxxl}px;
`
export const IconsBlock = styled.div`
  width: 450px;
  padding: 0 ${({ theme }) => theme.paddings.l}px;
  display: flex;
  justify-content: space-between;
`
export const BottomBlock = styled.div`
  height: 52px;
  background-color: ${({ theme }) => theme.colors.softRose};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.paddings.massive}px;
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
