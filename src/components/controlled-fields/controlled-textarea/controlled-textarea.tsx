import type { TextareaHTMLAttributes } from 'react'
import { type FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextAreaField
          value={value}
          onChange={onChange}
          errorMessage={t(error?.message)}
          data-test-id={dataTestId || `controlled-input-${fieldName}`}
          {...rest}
        />
      )}
    />
  )
}
