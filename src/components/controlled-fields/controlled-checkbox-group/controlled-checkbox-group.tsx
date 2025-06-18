import type { ChangeEvent, FC } from 'react'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { CheckBox } from '@/components/checkbox'
import { CheckboxGroup } from '@/components/checkbox-group'

type Option = {
  label: string
  value: string
}

type ControlledCheckboxGroupProps = {
  fieldName: string
  options: Option[]
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
  const { t } = useTranslation()

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
            error={t(error?.message)}
            onChange={handleChange}
          >
            {options.map(option => (
              <CheckBox
                key={option.value}
                name={option.value}
                label={option.label}
                checked={value.includes(option.value)}
                data-test-id={
                  dataTestId ? `${dataTestId}-${option.value}` : undefined
                }
              />
            ))}
          </CheckboxGroup>
        )
      }}
    />
  )
}
