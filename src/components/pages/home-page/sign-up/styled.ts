import styled from '@emotion/styled'

import { ControlledTextField } from '@/components/controlled-fields'

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
  left: 250px;
  background-color: #ffffff;
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
export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`
export const TitleBlock = styled.div`
  width: 200px;
`
export const DescriptionBlock = styled.div`
  width: 230px;
`
