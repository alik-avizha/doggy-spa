import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 ${({ theme }) => theme.paddings.xl}px;
  margin-bottom: ${({ theme }) => theme.margins.xxl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 0 ${({ theme }) => theme.paddings.m}px;
  }
`
export const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  margin-bottom: ${({ theme }) => theme.margins.xl}px;
  gap: ${({ theme }) => theme.gap.s}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    justify-content: center;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.gap.xl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    max-width: 100%;
  }
`
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`
