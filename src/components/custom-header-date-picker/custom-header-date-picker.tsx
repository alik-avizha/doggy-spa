import type { FC } from 'react'

import { LeftIcon } from '@/assets/leftIcon'
import { RightIcon } from '@/assets/rightIcon'
import {
  HeaderWrapper,
  NavigationBlock,
  StyledButtonNavigation,
} from '@/components/custom-header-date-picker/styled.css'
import { Typography } from '@/components/typography'

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
        <StyledButtonNavigation onClick={decreaseMonth}>
          <LeftIcon />
        </StyledButtonNavigation>
        <Typography variant="size_18">{formattedDate}</Typography>
        <StyledButtonNavigation onClick={increaseMonth}>
          <RightIcon />
        </StyledButtonNavigation>
      </NavigationBlock>
    </HeaderWrapper>
  )
}
