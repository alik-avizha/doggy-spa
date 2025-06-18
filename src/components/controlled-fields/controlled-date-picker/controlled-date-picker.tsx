import 'react-datepicker/dist/react-datepicker.css'

import { ru, enUS } from 'date-fns/locale'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ErrorMessage } from '@/components/errror-message'

import { CustomHeaderDatePicker } from './custom-header-date-picker'
import { DatePickerWrapper } from './styled'

type ControlledDatePickerProps = {
  fieldName: string
  dataTestId?: string
}

export const ControlledDatePicker: FC<ControlledDatePickerProps> = ({
  fieldName,
  dataTestId,
}) => {
  const { i18n, t } = useTranslation()

  const { control } = useFormContext()

  const [minDate, setMinDate] = useState<Date | null>(null)

  useEffect(() => {
    setMinDate(new Date())
  }, [])

  const currentLang = i18n.language.split('-')[0]
  const locale = currentLang === 'ru' ? ru : enUS

  if (!minDate) {
    return null
  }

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <DatePickerWrapper>
          <DatePicker
            selected={value ?? null}
            onChange={onChange}
            minDate={minDate}
            inline
            showDisabledMonthNavigation
            locale={locale}
            formatWeekDay={day => day.charAt(0)}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <CustomHeaderDatePicker
                date={date}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                nextMonthButtonDisabled={nextMonthButtonDisabled}
                prevMonthButtonDisabled={prevMonthButtonDisabled}
              />
            )}
            data-test-id={dataTestId}
          />
          {error?.message && <ErrorMessage>{t(error.message)}</ErrorMessage>}
        </DatePickerWrapper>
      )}
    />
  )
}
