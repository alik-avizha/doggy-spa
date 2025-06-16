import styled from '@emotion/styled'

import type { TypographyProps } from './typography'

export const StyledTypography = styled.p<{
  fontSize: number
  fontWeight: number
  fontFamily: string
  color: string
  marginBt: number
  marginTp: number
  textAlign: NonNullable<TypographyProps['textAlign']>
  textTransForm: NonNullable<TypographyProps['textTransForm']>
}>`
  ${({
    textAlign,
    textTransForm,
    color,
    fontWeight,
    fontFamily,
    fontSize,
    marginTp,
    marginBt,
  }) => `
    margin: 0;
    margin-top: ${marginTp}px;
    margin-bottom: ${marginBt}px;
    line-height: 100%;
    color: ${color};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    text-align: ${textAlign};
    font-family: ${fontFamily}, sans-serif;
    text-transform: ${textTransForm};
  `}
`
