import styled from '@emotion/styled'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-fields'

export const Wrapper = styled.div`
  width: 970px;
  height: 650px;
  border: ${({ theme }) => theme.borders.xl}px solid
    ${({ theme }) => theme.colors.softRose};
  padding: ${({ theme }) => theme.paddings.huge}px
    ${({ theme }) => theme.paddings.l}px ${({ theme }) => theme.paddings.huge}px
    ${({ theme }) => theme.paddings.huge}px;
  display: flex;
  gap: ${({ theme }) => theme.gap.xl}px;
  position: absolute;
  z-index: 1;
  top: -150px;
  left: 250px;
  background-color: ${({ theme }) => theme.colors.white};
`
export const FormBlock = styled.form`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledTextField = styled(ControlledTextField)`
  height: 40px;
`
export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.margins.xl}px;
`
export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`
export const TitleBlock = styled.div`
  width: 200px;
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`
export const DescriptionBlock = styled.div`
  width: 230px;
  margin-top: ${({ theme }) => theme.margins.xl}px;
`
