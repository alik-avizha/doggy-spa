import styled from '@emotion/styled'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: 70px 50px 200px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`
export const Border = styled.div`
  width: 592px;
  margin-bottom: 40px;
  border: 1px solid #000000;
`
export const Description = styled(Typography)`
  text-align: center;
  margin-bottom: 140px;
  font-family: Cormorant, sans-serif;
  font-weight: 700;
`

export const StyledLink = styled.span`
  color: #e89b93;
  text-decoration: underline;
`
export const SubmitForm = styled.div`
  width: 80%;
`
export const FieldBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  margin-bottom: 70px;
`
export const SubmitAction = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

export const ButtonStyled = styled(Button)`
  padding: 12px 60px;
`
