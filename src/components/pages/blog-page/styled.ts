import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px
    ${({ theme }) => theme.paddings.massive}px
    ${({ theme }) => theme.paddings.xl}px;
`
export const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.margins.xxl}px;
`
export const TextBlock = styled.div`
  width: 720px;
`
