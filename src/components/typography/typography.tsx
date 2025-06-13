import type { Property } from 'csstype'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { StyledTypography } from './styled'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  size?:
    | 26
    | 63
    | 64
    | 30
    | 32
    | 22
    | 14
    | 66
    | 20
    | 70
    | 40
    | 35
    | 15
    | 18
    | 16
  textAlign?: Property.TextAlign
  textTransForm?: Property.TextTransform
  fontWeight?: 400 | 700
  color?: '#000000' | '#4C4C4B'
  fontFamily?: 'Cinzel Decorative' | 'Cormorant' | 'Tangerine'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const {
    as: Component = 'p',
    size = 26,
    textAlign = 'left',
    textTransForm = 'inherit',
    fontWeight = 700,
    color = '#4C4C4B',
    fontFamily = 'Cormorant',
    ...rest
  } = props

  return (
    <StyledTypography
      as={Component}
      fontSize={size}
      textAlign={textAlign}
      textTransForm={textTransForm}
      fontWeight={fontWeight}
      color={color}
      fontFamily={fontFamily}
      {...rest}
    />
  )
}
