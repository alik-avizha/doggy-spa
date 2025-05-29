import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { StyledTypography } from './styled.css'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'size_26'
    | 'size_63'
    | 'size_30'
    | 'size_32'
    | 'size_22'
    | 'size_14'
    | 'size_66'
    | 'size_20'
    | 'size_70'
    | 'size_64'
    | 'size_40'
    | 'size_35'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant = 'size_26', as: Component = 'p', ...rest } = props

  return <StyledTypography as={Component} variant={variant} {...rest} />
}
