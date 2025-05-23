import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { StyledTypography } from './styled.css'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: 'size_26' | 'size_63' | 'size_30' | 'size_22' | 'size_14'
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const {
    variant = 'size_26',
    className = '',
    as: Component = 'p',
    ...rest
  } = props

  return (
    <StyledTypography
      as={Component}
      variant={variant}
      className={className}
      {...rest}
    />
  )
}
