import type {
  ChangeEvent,
  KeyboardEvent,
  ComponentPropsWithoutRef,
} from 'react'
import { forwardRef } from 'react'

import { DeleteIcon } from '@/assets/deleteIcon'
import { Search } from '@/assets/search'
import {
  ButtonAction,
  ErrorMessage,
  FieldContainer,
  InputField,
  SearchIconWrapper,
} from '@/components/textfield/styled.css'

export type TextFieldProps = {
  type?: 'default' | 'searchType'
  errorMessage?: string
  placeholder?: string
  disableValue?: boolean
  value?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  onSearchClear?: () => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      errorMessage,
      placeholder = 'Some text',
      type = 'default',
      disableValue = false,
      value,
      onEnter,
      onSearchClear,
      onChangeText,
      ...restProps
    },
    ref
  ) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText?.(e.currentTarget.value)
    }

    const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter()
      }
    }

    const onSearchClearHandler = () => {
      onSearchClear?.()
    }

    return (
      <>
        <FieldContainer>
          {type === 'searchType' && (
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
          )}
          <InputField
            className={errorMessage ? 'error' : ''}
            placeholder={placeholder}
            disabled={disableValue}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownCallback}
            value={value}
            ref={ref}
            hasError={!!errorMessage}
            typeStyle={type}
            {...restProps}
          />
          {type === 'searchType' && !!value && (
            <ButtonAction
              type="button"
              disabled={disableValue}
              onClick={onSearchClearHandler}
              aria-label="Clear search"
            >
              <DeleteIcon />
            </ButtonAction>
          )}
        </FieldContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    )
  }
)
