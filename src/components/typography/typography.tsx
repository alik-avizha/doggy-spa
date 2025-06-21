import type { Property } from 'csstype'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { commonTheme } from '@/constants'

import { StyledTypography } from './styled'

type FontSizeKey = keyof typeof commonTheme.fontSizes
type FontWeightKey = keyof typeof commonTheme.fontWeights
type FontFamilyKey = keyof typeof commonTheme.fontFamilies
type ColorKey = keyof typeof commonTheme.colors
type MarginKey = keyof typeof commonTheme.margins

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  size?: FontSizeKey
  fontWeight?: FontWeightKey
  fontFamily?: FontFamilyKey
  color?: ColorKey
  marginBt?: MarginKey
  marginTp?: MarginKey
  textAlign?: Property.TextAlign
  textTransForm?: Property.TextTransform
  dataTestId?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const {
    as: Component = 'p',
    size = 'l',
    fontWeight = 'xl',
    fontFamily = 'cormorant',
    color = 'charCoal',
    textAlign = 'left',
    textTransForm = 'inherit',
    marginBt = 'none',
    marginTp = 'none',
    dataTestId,
    ...rest
  } = props
  return (
    <StyledTypography
      as={Component}
      fontSize={commonTheme.fontSizes[size]}
      textAlign={textAlign}
      textTransForm={textTransForm}
      fontWeight={commonTheme.fontWeights[fontWeight]}
      color={commonTheme.colors[color]}
      fontFamily={commonTheme.fontFamilies[fontFamily]}
      marginTp={commonTheme.margins[marginTp]}
      marginBt={commonTheme.margins[marginBt]}
      data-testid={dataTestId}
      {...rest}
    />
  )
}
