import styled from '@emotion/styled'
import Link from 'next/link'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.tnHouse};
  border-top: ${({ theme }) => theme.borders.xxl}px solid
    ${({ theme }) => theme.colors.softRose};
`
export const MainBlock = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.paddings.xxl}px
    ${({ theme }) => theme.paddings.m}px ${({ theme }) => theme.paddings.xxl}px
    ${({ theme }) => theme.paddings.m}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.m}px;
    & > :nth-child(1) {
      order: 1;
    }
    & > :nth-child(2) {
      order: 3;
    }
    & > :nth-child(3) {
      order: 2;
    }
  }
`
export const LeftBlock = styled.div`
  width: 400px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    max-width: 100%;
    & h4 {
      text-align: center;
    }
  }
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
export const NetworkItem = styled.a`
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

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    &:hover {
      transform: none;
    }
  }
`
export const RightBlock = styled.div`
  width: 290px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    max-width: 100%;
    & h4 {
      text-align: center;
    }
  }
`
export const CenterBlock = styled.div`
  width: 650px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    max-width: 100%;

    & h4 {
      text-align: center;
    }
  }
`
export const SubmitForm = styled.form`
  display: flex;
  align-items: start;

  gap: ${({ theme }) => theme.gap.m}px;
  margin-bottom: ${({ theme }) => theme.margins.xxxl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    flex-wrap: wrap;
  }
`
export const IconsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;

  padding: 0 ${({ theme }) => theme.paddings.l}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
  }
`
export const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.softRose};
  padding: ${({ theme }) => theme.paddings.xs}px 0
    ${({ theme }) => theme.paddings.xs}px ${({ theme }) => theme.paddings.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    padding: ${({ theme }) => theme.paddings.xs}px;
    gap: ${({ theme }) => theme.gap.s}px;
    flex-wrap: wrap;
    justify-content: center;
  }
`
export const CookiesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    gap: ${({ theme }) => theme.gap.s}px;
    width: 100%;
    flex-wrap: wrap;
  }
`
export const PrivacyBlock = styled.div`
  display: flex;
  width: 400px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
    gap: ${({ theme }) => theme.gap.s}px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
