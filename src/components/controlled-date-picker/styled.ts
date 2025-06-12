import styled from '@emotion/styled'

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

  .react-datepicker__day--today {
    font-weight: 500;
  }

  .react-datepicker__day {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }

  .react-datepicker__day-name {
    color: #e89b93;
  }

  .react-datepicker__day--selected {
    background-color: #e89b93;
    border-radius: 4px;
    color: black;

    &:hover {
      background-color: #e89b93 !important;
    }
  }
`
