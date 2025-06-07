'use client'

import { usePathname } from 'next/navigation'

import { TitleLink } from '@/components/link'
import { Typography } from '@/components/typography'
import { Routes } from '@/contstants/routes'

import { InfoPlateBlock, HeaderBlock } from './styled'

export function Header() {
  const pathname = usePathname()
  return (
    <>
      <HeaderBlock>
        {Routes.map(({ href, label }) => (
          <TitleLink key={href} href={href} isActive={pathname === href}>
            {label}
          </TitleLink>
        ))}
      </HeaderBlock>
      <InfoPlateBlock>
        <Typography variant="size_26">
          Get 20% OFF When You Book A Spa Day For Your Animal Today!
        </Typography>
      </InfoPlateBlock>
    </>
  )
}
