import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.paddings.xl}px;
  margin-bottom: ${({ theme }) => theme.margins.xxl}px;
`
export const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.margins.xl}px;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xl}px;
`
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`
