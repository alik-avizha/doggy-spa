import type { ChangeEvent, FC } from 'react'

import { Typography } from '@/components/typography'

import { CustomCheckbox, CheckboxStyled, CheckBoxWithLabel } from './styled'

type Props = {
  label: string
  checked: boolean
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
  name?: string
  dataTestId: string
}

export const CheckBox: FC<Props> = ({
  label,
  checked,
  onChange,
  name,
  dataTestId,
}) => {
  const id = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <CheckBoxWithLabel>
      <CheckboxStyled
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        data-test-id={dataTestId}
        id={id}
      />
      <CustomCheckbox checked={checked} htmlFor={id} />
      <Typography size="s">{label}</Typography>
    </CheckBoxWithLabel>
  )
}
