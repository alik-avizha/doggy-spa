import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px
    ${({ theme }) => theme.paddings.massive}px
    ${({ theme }) => theme.paddings.xl}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Border = styled.div`
  width: 592px;
  border: ${({ theme }) => theme.borders.xs}px solid
    ${({ theme }) => theme.colors.black};
`
export const StyledLink = styled.span`
  color: ${({ theme }) => theme.colors.pinkKisses};
  text-decoration: underline;
`
export const SubmitForm = styled.form`
  width: 1285px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FieldBlock = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.gap.xl}px;
  margin-bottom: ${({ theme }) => theme.margins.xxxl}px;
`
export const SubmitAction = styled.div`
  margin-top: ${({ theme }) => theme.margins.huge}px;
  width: 220px;
`
