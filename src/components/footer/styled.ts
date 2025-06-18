import styled from '@emotion/styled'
import Link from 'next/link'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 492px;

  background-color: ${({ theme }) => theme.colors.tnHouse};
  border-top: ${({ theme }) => theme.borders.xxl}px solid
    ${({ theme }) => theme.colors.softRose};
`
export const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.paddings.xxl}px
    ${({ theme }) => theme.paddings.m}px 0 ${({ theme }) => theme.paddings.m}px;
`
export const LeftBlock = styled.div`
  width: 346px;
`
export const NavigationItem = styled(Link)`
  display: block;
  text-decoration: none;
  transition: transform 0.3s ease;
  line-height: 100%;

  margin-bottom: ${({ theme }) => theme.margins.s}px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.charCoal};

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
  line-height: 100%;
  transition: transform 0.3s ease;

  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.charCoal};

  &:hover {
    transform: translateY(-5px);
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
  display: flex;
  justify-content: space-between;
  width: 450px;

  padding: 0 ${({ theme }) => theme.paddings.l}px;
`
export const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;

  background-color: ${({ theme }) => theme.colors.softRose};
  padding: 0 0 0 ${({ theme }) => theme.paddings.xl}px;
`
export const CookiesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`
export const PrivacyBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`
