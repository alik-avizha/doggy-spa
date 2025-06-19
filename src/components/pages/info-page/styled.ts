import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px ${({ theme }) => theme.paddings.big}px
    ${({ theme }) => theme.paddings.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    & h2 {
      font-size: ${({ theme }) => theme.fontSizes.xxl}px;
      margin-bottom: ${({ theme }) => theme.margins.xxl}px;
    }
    padding: ${({ theme }) => theme.paddings.xl}px
      ${({ theme }) => theme.paddings.m}px
      ${({ theme }) => theme.paddings.massive}px;
  }
`
export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margins.massive}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.xl}px;
    margin-bottom: ${({ theme }) => theme.margins.xl}px;

    & > :nth-child(1) {
      order: 2;
    }
    & > :nth-child(2) {
      order: 1;
    }
  }
`
export const SelectionBlock = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.xs}px;
`
export const TextFieldWrapper = styled.div`
  width: 338px;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: 100%;
  }
`
