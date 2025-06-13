import type { FC } from 'react'

import { StyledGap } from './styled'

export type GapProps = {
  direction?: 'vertical' | 'horizontal'
  size?: number
}
export const Gap: FC<GapProps> = ({ direction = 'vertical', size = 8 }) => (
  <StyledGap direction={direction} size={size} aria-hidden="true" />
)
