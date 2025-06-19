import styled from '@emotion/styled'

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.l}px;
  padding: ${({ theme }) => theme.paddings.l}px 0
    ${({ theme }) => theme.paddings.sm}px 0;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    display: none;
  }
`
export const InfoPlateBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tnHouse};
  padding: ${({ theme }) => theme.paddings.xs}px 0;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    display: none;
  }
`
