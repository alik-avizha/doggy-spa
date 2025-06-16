import styled from '@emotion/styled'

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    border: none;
    width: 350px;
    font-family: ${({ theme }) => theme.fontFamilies.poppins}, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.x}px;
    font-weight: ${({ theme }) => theme.fontWeights.l}px;
  }

  .react-datepicker__month-container {
    width: 100%;
  }

  .react-datepicker__header {
    background-color: transparent;
    border: none;
  }

  .react-datepicker__month {
    margin: ${({ theme }) => theme.margins.none};
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
    font-weight: ${({ theme }) => theme.fontWeights.l};
  }

  .react-datepicker__day {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ theme }) => theme.fontWeights.l};
  }

  .react-datepicker__day-name {
    color: ${({ theme }) => theme.colors.pinkKisses};
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.pinkKisses};
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      background-color: ${({ theme }) => theme.colors.pinkKisses} !important;
    }
  }
`
