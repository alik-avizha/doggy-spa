import type { FC } from 'react'

import { StyledGap } from './styled'
import type { GapeType } from './types'

type GapProps = GapeType
export const Gap: FC<GapProps> = ({ direction = 'vertical', size = 8 }) => (
  <StyledGap direction={direction} size={size} aria-hidden="true" />
)
