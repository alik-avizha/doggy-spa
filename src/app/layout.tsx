import type { Metadata } from 'next'
import './globals.css'
import {
  Cinzel_Decorative,
  Tangerine,
  Cormorant,
  Poppins,
} from 'next/font/google'
import type { ReactNode } from 'react'

import { ErrorBoundary } from '@/components/error-boundary'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Providers } from '@/providers'

const poppins = Poppins({
  weight: ['500'],
  subsets: ['latin'],
})

const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

const tangerine = Tangerine({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const cormorant = Cormorant({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Doggy spa',
  description: 'Cute app about dogs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${cinzelDecorative.className} ${tangerine.className} ${cormorant.className}`}
      >
        <Providers>
          <Header />
          <ErrorBoundary>{children}</ErrorBoundary>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
