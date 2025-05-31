import type { FC } from 'react'

import type { GapeType } from '@/components/gap/types'

import { StyledGap } from './styled.css'

type GapProps = GapeType
export const Gap: FC<GapProps> = ({ direction = 'vertical', size = 8 }) => (
  <StyledGap direction={direction} size={size} aria-hidden="true" />
)
