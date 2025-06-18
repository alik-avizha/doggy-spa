'use client'

import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { NavigationLink } from '@/components/navigation-link'
import { Typography } from '@/components/typography'
import { Routes } from '@/constants/routes'

import { InfoPlateBlock, HeaderBlock } from './styled'

export function Header() {
  const { t } = useTranslation()
  const pathname = usePathname()

  const localizedDogCollars = Routes.map(item => ({
    ...item,
    label: t(item.label),
  }))

  return (
    <>
      <HeaderBlock>
        {localizedDogCollars.map(({ href, label }) => (
          <NavigationLink key={href} href={href} isActive={pathname === href}>
            {label}
          </NavigationLink>
        ))}
      </HeaderBlock>
      <InfoPlateBlock>
        <Typography size="l">{t('header.getOff')}</Typography>
      </InfoPlateBlock>
    </>
  )
}
