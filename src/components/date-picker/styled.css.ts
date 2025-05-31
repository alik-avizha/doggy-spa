import styled from '@emotion/styled'

import { Typography } from '@/components/typography'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const SlotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const SlotsTitle = styled(Typography)`
  margin-bottom: 10px;
  font-weight: 600;
`
export const Checkbox = styled.input`
  display: none;
`
export const TimeslotLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
`

export const CustomCheckbox = styled.label<{ checked: boolean }>`
  width: 24px;
  height: 22px;
  border: 2px solid #4c4c4b;
  border-radius: 4px;
  position: relative;
  margin-right: 10px;
  transition: background-color 0.2s;
  cursor: pointer;

  ${props =>
    props.checked &&
    `
    background-color: #E89B93;
    border-color: #E89B93; 
  `}

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${props =>
    props.checked &&
    `
    &::after {
      opacity: 1;
    }
  `}
`
export const DatePickerWrapper = styled.div`
  .react-datepicker {
    border: none;
    width: 350px;
    font-family: Poppins sans-serif;
    font-size: 13px;
    font-weight: 500;
  }

  .react-datepicker__month-container {
    width: 100%;
  }

  .react-datepicker__header {
    background-color: transparent;
    border: none;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day-name {
    width: 30px;
    height: 30px;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker__day-name {
    color: #e89b93;
  }

  .react-datepicker__day--selected {
    background-color: #e89b93;
    border-radius: 4px;
    color: black;

    &:hover {
      background-color: #e89b93;
    }
  }
`
