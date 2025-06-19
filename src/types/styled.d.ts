import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    dimensions: {
      desktop: number
      laptop: number
      mobile: number
    }
    colors: {
      tnHouse: string
      roseyCheek: string
      bronzedRose: string
      pinkKisses: string
      softRose: string
      inHouseColour: string
      charCoal: string
      lightGray: string
      slateGray: string
      white: string
      black: string
      error: string
    }
    fontWeights: {
      s: number
      l: number
      xl: number
    }
    fontSizes: {
      x: number
      s: number
      m: number
      l: number
      mL: number
      xl: number
      xxl: number
      xxxl: number
      xxxxl: number
    }
    fontFamilies: {
      cormorant: string
      cinzelDecorative: string
      tangerine: string
      poppins: string
    }
    margins: {
      none: number
      xxs: number
      xs: number
      s: number
      m: number
      l: number
      xl: number
      xxl: number
      xxxl: number
      huge: number
      massive: number
      gigantic: number
    }
    paddings: {
      none: number
      xs: number
      sm: number
      m: number
      l: number
      xl: number
      xxl: number
      xxxl: number
      huge: number
      massive: number
      big: number
    }
    borderRadius: {
      sm: number
      md: number
      lg: number
    }
    gap: {
      xs: number
      s: number
      m: number
      l: number
      xl: number
    }
    borders: {
      xs: number
      sm: number
      lg: number
      xl: number
      xxl: number
    }
  }
}
