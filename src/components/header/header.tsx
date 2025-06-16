'use client'

import { usePathname } from 'next/navigation'

import { NavigationLink } from '@/components/navigation-link'
import { Typography } from '@/components/typography'
import { Routes } from '@/constants/routes'

import { InfoPlateBlock, HeaderBlock } from './styled'

export function Header() {
  const pathname = usePathname()
  return (
    <>
      <HeaderBlock>
        {Routes.map(({ href, label }) => (
          <NavigationLink key={href} href={href} isActive={pathname === href}>
            {label}
          </NavigationLink>
        ))}
      </HeaderBlock>
      <InfoPlateBlock>
        <Typography size="l">
          Get 20% OFF When You Book A Spa Day For Your Animal Today!
        </Typography>
      </InfoPlateBlock>
    </>
  )
}
