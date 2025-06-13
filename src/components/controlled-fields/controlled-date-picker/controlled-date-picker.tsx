import 'react-datepicker/dist/react-datepicker.css'

import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Controller, useFormContext } from 'react-hook-form'

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
  const { control } = useFormContext()

  const [minDate, setMinDate] = useState<Date | null>(null)

  useEffect(() => {
    setMinDate(new Date())
  }, [])

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
          {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
        </DatePickerWrapper>
      )}
    />
  )
}
