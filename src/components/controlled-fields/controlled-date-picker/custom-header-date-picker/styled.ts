import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 ${({ theme }) => theme.paddings.xs}px;
  margin: ${({ theme }) => theme.margins.xs}px 0
    ${({ theme }) => theme.margins.l}px 0;
`
export const NavigationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`
export const StyledButtonNavigation = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
