import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl}px
    ${({ theme }) => theme.paddings.xl}px ${({ theme }) => theme.paddings.big}px
    ${({ theme }) => theme.paddings.xl}px;
`
export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margins.massive}px;
`
export const SelectionBlock = styled.div`
  display: flex;
`
export const TextFieldWrapper = styled.div`
  width: 338px;
`
