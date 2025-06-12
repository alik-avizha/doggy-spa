import type { FC } from 'react'

import { LeftIcon, RightIcon } from '@/components/icons'
import { Typography } from '@/components/typography'

import {
  HeaderWrapper,
  NavigationBlock,
  StyledButtonNavigation,
} from './styled'

type Props = {
  date: Date
  decreaseMonth: () => void
  increaseMonth: () => void
  prevMonthButtonDisabled: boolean
  nextMonthButtonDisabled: boolean
}

export const CustomHeaderDatePicker: FC<Props> = ({
  decreaseMonth,
  increaseMonth,
  date,
}) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
  const formattedDate = date.toLocaleDateString('en-US', options)
  return (
    <HeaderWrapper>
      <Typography variant="size_18">Select dates</Typography>
      <NavigationBlock>
        <StyledButtonNavigation onClick={decreaseMonth} type="button">
          <LeftIcon />
        </StyledButtonNavigation>
        <Typography variant="size_18">{formattedDate}</Typography>
        <StyledButtonNavigation onClick={increaseMonth} type="button">
          <RightIcon />
        </StyledButtonNavigation>
      </NavigationBlock>
    </HeaderWrapper>
  )
}
