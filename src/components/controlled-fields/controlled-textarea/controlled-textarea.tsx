import type { TextareaHTMLAttributes } from 'react'
import { type FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { TextAreaField } from '@/components/textarea'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  fieldName: string
  dataTestId?: string
  height: number
}

export const ControlledTextarea: FC<Props> = ({
  fieldName,
  dataTestId,
  ...rest
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextAreaField
          value={value}
          onChange={onChange}
          errorMessage={error?.message}
          data-test-id={dataTestId || `controlled-input-${fieldName}`}
          {...rest}
        />
      )}
    />
  )
}
