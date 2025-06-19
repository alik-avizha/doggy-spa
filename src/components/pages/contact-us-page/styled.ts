import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px
    ${({ theme }) => theme.paddings.massive}px
    ${({ theme }) => theme.paddings.xl}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    padding: ${({ theme }) => theme.paddings.xxl}px
      ${({ theme }) => theme.paddings.m}px;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    & h3 {
      margin-bottom: ${({ theme }) => theme.margins.xl}px;
      word-break: break-all;
    }
  }
`
export const Border = styled.div`
  width: 592px;
  border: ${({ theme }) => theme.borders.xs}px solid
    ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
  }
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

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    & textarea {
      height: 200px;
    }
  }
`
export const FieldBlock = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.gap.xl}px;
  margin-bottom: ${({ theme }) => theme.margins.xxxl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    gap: ${({ theme }) => theme.gap.l}px;
    margin-bottom: ${({ theme }) => theme.margins.l}px;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    gap: ${({ theme }) => theme.gap.m}px;
    flex-direction: column;
  }
`
export const SubmitAction = styled.div`
  margin-top: ${({ theme }) => theme.margins.huge}px;
  width: 220px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xl}px;
    width: 100%;
  }
`
