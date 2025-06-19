import styled from '@emotion/styled'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-fields'

export const Wrapper = styled.div`
  height: 650px;
  display: flex;
  position: absolute;
  z-index: 1;
  top: -150px;
  left: 250px;

  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borders.xl}px solid
    ${({ theme }) => theme.colors.softRose};
  padding: ${({ theme }) => theme.paddings.huge}px
    ${({ theme }) => theme.paddings.l}px ${({ theme }) => theme.paddings.huge}px
    ${({ theme }) => theme.paddings.huge}px;
  gap: ${({ theme }) => theme.gap.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 550px;
    height: 550px;
    padding: ${({ theme }) => theme.paddings.l}px;
    position: initial;
    & > :nth-child(2) {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
  }
`
export const FormBlock = styled.form`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
    align-items: center;
  }
`
export const StyledTextField = styled(ControlledTextField)`
  height: 40px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    height: 60px;
  }
`
export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.margins.xl}px;
`
export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
    align-items: center;
  }
`
export const TitleBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    & h3 {
      text-align: center;
    }
  }
`
export const DescriptionBlock = styled.div`
  width: 230px;

  margin-top: ${({ theme }) => theme.margins.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
  }
`
