import styled from '@emotion/styled'

import type { GapeType } from './types'

export const StyledGap = styled.div<GapeType>`
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
