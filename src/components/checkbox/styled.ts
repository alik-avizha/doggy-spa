import styled from '@emotion/styled'

export const CheckBoxWithLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
`
export const CheckboxStyled = styled.input`
  display: none;
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
