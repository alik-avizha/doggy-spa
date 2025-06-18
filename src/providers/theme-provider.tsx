'use client'

import { ThemeProvider } from '@emotion/react'
import type { FC, ReactNode } from 'react'
import '../i18n/i18n'

import { commonTheme } from '@/constants'

type Props = {
  children: ReactNode
}
export const Providers: FC<Props> = ({ children }) => (
  <ThemeProvider theme={commonTheme}>{children}</ThemeProvider>
)
