import { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { CustomHeaderDatePicker } from '@/components/custom-header-date-picker/custom-header-date-picker'
import {
  Checkbox,
  Container,
  CustomCheckbox,
  DatePickerWrapper,
  SlotsTitle,
  SlotsWrapper,
  TimeslotLabel,
} from '@/components/date-picker/styled.css'
import { Typography } from '@/components/typography'

const TIMESLOTS = [
  '11 am - 12 pm',
  '12 pm - 1 pm',
  '1 pm - 2 pm',
  '3 pm - 4 pm',
  '4 pm - 5 pm',
]

export const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const onChange = (date: Date | null) => {
    setSelectedDate(date)
    setSelectedSlot(null)
  }

  return (
    <Container>
      <SlotsWrapper>
        <SlotsTitle variant="size_20">
          {selectedDate
            ? `Choose a timeslot on ${selectedDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}:`
            : 'Choose a date:'}
        </SlotsTitle>
        {TIMESLOTS.map((slot, index) => (
          <TimeslotLabel key={index}>
            <Checkbox
              type="checkbox"
              checked={selectedSlot === slot}
              onChange={() => setSelectedSlot(slot)}
              id={`slot-${index}`}
            />
            <CustomCheckbox
              checked={selectedSlot === slot}
              htmlFor={`slot-${index}`}
            />
            <Typography variant="size_15">{slot}</Typography>
          </TimeslotLabel>
        ))}
      </SlotsWrapper>
      <DatePickerWrapper>
        <DatePicker
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
          selected={selectedDate}
          onChange={onChange}
          minDate={new Date()}
          inline
          showDisabledMonthNavigation
          formatWeekDay={day => day.charAt(0)}
        />
      </DatePickerWrapper>
    </Container>
  )
}
