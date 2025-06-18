import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
  const formattedDate = date.toLocaleDateString(currentLang, options)

  return (
    <HeaderWrapper>
      <Typography size="m">{t('bookAppointment.selectDates')}</Typography>
      <NavigationBlock>
        <StyledButtonNavigation onClick={decreaseMonth} type="button">
          <LeftIcon />
        </StyledButtonNavigation>
        <Typography size="m">{formattedDate}</Typography>
        <StyledButtonNavigation onClick={increaseMonth} type="button">
          <RightIcon />
        </StyledButtonNavigation>
      </NavigationBlock>
    </HeaderWrapper>
  )
}
