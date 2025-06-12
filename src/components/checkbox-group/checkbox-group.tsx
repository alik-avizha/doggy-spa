import type { ReactElement } from 'react'
import React from 'react'

import { ErrorMessage } from '@/components/errror-message'

import { Block, Label, Wrapper } from './styled'

type CheckboxChildProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type CheckboxGroupDesktopProps = {
  label: string
  error?: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    payload: { name: string; checked: boolean }
  ) => void
  children:
    | ReactElement<CheckboxChildProps>
    | ReactElement<CheckboxChildProps>[]
}

export const CheckboxGroup: React.FC<CheckboxGroupDesktopProps> = ({
  label,
  error,
  onChange,
  children,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    onChange(e, { name, checked })
  }

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement<CheckboxChildProps>(child)) {
      return React.cloneElement(child, {
        onChange: handleChange,
      })
    }
    return child
  })

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Block>{childrenWithProps}</Block>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  )
}
