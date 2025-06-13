import styled from '@emotion/styled'

import type { GapProps } from './gap'

export const StyledGap = styled.div<{
  direction: NonNullable<GapProps['direction']>
  size: NonNullable<GapProps['size']>
}>`
  ${({ direction, size }) =>
    direction === 'vertical'
      ? {
          height: `${size}px`,
          width: '100%',
        }
      : {
          width: `${size}px`,
          height: '100%',
          display: 'inline-block',
        }}
`
