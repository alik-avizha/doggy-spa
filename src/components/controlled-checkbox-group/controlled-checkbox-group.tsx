import type { ChangeEvent, FC } from 'react'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { CheckboxGroup } from '@/components/checkbox-group'
import { CheckBox } from '@/components/checkbox/checkbox'

type ControlledCheckboxGroupProps = {
  fieldName: string
  options: string[]
  dataTestId?: string
  label: string
}

export const ControlledCheckboxGroup: FC<ControlledCheckboxGroupProps> = ({
  fieldName,
  options,
  dataTestId,
  label,
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { value = [], onChange }, fieldState: { error } }) => {
        const handleChange = (
          e: ChangeEvent<HTMLInputElement>,
          payload: { name: string; checked: boolean }
        ) => {
          if (payload.checked) {
            if (!value.includes(payload.name)) {
              onChange([...value, payload.name])
            }
          } else {
            onChange(value.filter((v: string) => v !== payload.name))
          }
        }

        return (
          <CheckboxGroup
            label={label}
            error={error?.message}
            onChange={handleChange}
          >
            {options.map(option => (
              <CheckBox
                key={option}
                name={option}
                label={option}
                checked={value.includes(option)}
                data-test-id={
                  dataTestId ? `${dataTestId}-${option}` : undefined
                }
              />
            ))}
          </CheckboxGroup>
        )
      }}
    />
  )
}
