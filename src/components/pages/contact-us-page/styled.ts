import styled from '@emotion/styled'

import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: 70px 50px 200px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Border = styled.div`
  width: 592px;
  border: 1px solid #000000;
`
export const Description = styled(Typography)`
  font-family: Cormorant, sans-serif;
  font-weight: 700;
`
export const StyledLink = styled.span`
  color: #e89b93;
  text-decoration: underline;
`
export const SubmitForm = styled.form`
  width: 1285px;
`
export const FieldBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
`
export const SubmitAction = styled.div`
  display: flex;
  justify-content: center;
`

export const TextFieldsStyled = styled(TextField)`
  height: 60px;
`
