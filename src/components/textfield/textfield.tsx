import type { ChangeEvent, KeyboardEvent } from 'react'

import { ErrorMessage } from '@/components/errror-message'
import { SearchIcon } from '@/components/icons'

import {
  FieldContainer,
  InputField,
  SearchIconWrapper,
  Wrapper,
} from './styled'

export type TextFieldProps = {
  type?: 'default' | 'searchType'
  errorMessage?: string
  placeholder?: string
  disableValue?: boolean
  value?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  dataTestId?: string
}

export const TextField = ({
  errorMessage,
  placeholder = 'Some text',
  type = 'default',
  disableValue = false,
  value,
  onEnter,
  onChangeText,
  dataTestId,
  ...restProps
}: TextFieldProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText?.(e.currentTarget.value)
  }

  const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter()
    }
  }

  return (
    <Wrapper>
      <FieldContainer>
        {type === 'searchType' && (
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        )}
        <InputField
          placeholder={placeholder}
          disabled={disableValue}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownCallback}
          value={value}
          hasError={!!errorMessage}
          typeStyle={type}
          {...restProps}
        />
      </FieldContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}
