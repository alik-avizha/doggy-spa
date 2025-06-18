import styled from '@emotion/styled'

export const SwitcherWrapper = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.gap.xs}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  user-select: none;
`
export const LangButton = styled.button<{ active?: boolean }>`
  cursor: pointer;
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.roseyCheek : 'transparent'};
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-size: ${({ theme }) => theme.fontSizes.x}px;
  padding: ${({ theme }) => theme.paddings.xs}px
    ${({ theme }) => theme.paddings.l}px;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.bronzedRose : theme.colors.lightGray};
    color: ${({ active, theme }) =>
      active ? theme.colors.charCoal : theme.colors.charCoal};
  }
`
