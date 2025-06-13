import styled from '@emotion/styled'

import type { TypographyProps } from './typography'

export const StyledTypography = styled.p<{
  textAlign: NonNullable<TypographyProps['textAlign']>
  textTransForm: NonNullable<TypographyProps['textTransForm']>
  fontWeight: NonNullable<TypographyProps['fontWeight']>
  color: NonNullable<TypographyProps['color']>
  fontFamily: NonNullable<TypographyProps['fontFamily']>
  fontSize: NonNullable<TypographyProps['size']>
}>`
  ${({ textAlign, textTransForm, color, fontWeight, fontFamily, fontSize }) => `
    margin: 0;
    line-height: 100%;
    color: ${color};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    text-align: ${textAlign};
    font-family: ${fontFamily}, sans-serif;
    text-transform: ${textTransForm};
  `}
`
