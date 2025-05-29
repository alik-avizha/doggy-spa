import styled from '@emotion/styled'

import type { TypographyProps } from './typography'

const typography = (
  fontSize: string,
  lineHeight: string,
  fontWeight: string,
  color: string,
  fontFamily: string = 'Cormorant'
) => `
  margin: 0;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  font-family: ${fontFamily}, sans-serif;
  color: ${color};
`
export const StyledTypography = styled.p<{
  variant: NonNullable<TypographyProps['variant']>
}>`
  ${({ variant }) => {
    switch (variant) {
      case 'size_70':
        return typography('70px', '100%', '700', '#4C4C4B')
      case 'size_66':
        return typography('66px', '100%', '700', '#4C4C4B')
      case 'size_64':
        return typography('64px', '100%', '700', '#000000')
      case 'size_63':
        return typography('63px', '100%', '700', '#4C4C4B')
      case 'size_40':
        return typography('40px', '100%', '700', '#4C4C4B')
      case 'size_35':
        return typography('35px', '100%', '700', '#4C4C4B')
      case 'size_32':
        return typography('32px', '100%', '700', '#4C4C4B')
      case 'size_30':
        return typography('30px', '100%', '400', '#4C4C4B', 'Cinzel Decorative')
      case 'size_26':
        return typography('26px', '100%', '700', '#4C4C4B')
      case 'size_22':
        return typography('22px', '100%', '400', '#4C4C4B')
      case 'size_20':
        return typography('20px', '100%', '700', '#4C4C4B')
      case 'size_14':
        return typography('14px', '100%', '400', '#4C4C4B')
      default:
        return typography('26px', '100%', '700', '#4C4C4B')
    }
  }}
`
