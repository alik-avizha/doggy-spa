import type { InputHTMLAttributes } from 'react'
import { type ChangeEvent, type FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { TextField } from '@/components/textfield'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  fieldName: string
  onChangeWrapper?: (
    onChange: (value: string) => void
  ) => (evt: ChangeEvent<HTMLInputElement>) => void
  onBlurWrapper?: (
    onBlur: (value: string) => void
  ) => (evt: ChangeEvent<HTMLInputElement>) => void
  dataTestId?: string
  type?: 'default' | 'searchType'
}
export const ControlledTextField: FC<Props> = ({
  fieldName,
  onChangeWrapper,
  onBlurWrapper,
  dataTestId,
  type = 'default',
  ...rest
}) => {
  const { control } = useFormContext()
  const { t } = useTranslation()

  return (
    <Controller
      control={control}
      name={fieldName}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <TextField
          value={value}
          errorMessage={t(error?.message)}
          onBlur={onBlurWrapper ? onBlurWrapper(onBlur) : onBlur}
          onChange={onChangeWrapper ? onChangeWrapper(onChange) : onChange}
          dataTestId={dataTestId || `controlled-input-${fieldName}`}
          type={type}
          {...rest}
        />
      )}
    />
  )
}
