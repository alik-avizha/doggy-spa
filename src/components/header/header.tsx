'use client'

import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { NavigationLink } from '@/components/navigation-link'
import { Typography } from '@/components/typography'
import { ROUTES_WITH_LABEL } from '@/constants/routes'

import { BurgerMenu } from './burger-menu'
import { InfoPlateBlock, HeaderBlock } from './styled'

export function Header() {
  const { t } = useTranslation()
  const pathname = usePathname()

  return (
    <>
      <HeaderBlock>
        {ROUTES_WITH_LABEL.map(({ href, label }) => (
          <NavigationLink key={href} href={href} isActive={pathname === href}>
            {t(label)}
          </NavigationLink>
        ))}
      </HeaderBlock>
      <InfoPlateBlock>
        <Typography size="l">{t('header.getOff')}</Typography>
      </InfoPlateBlock>
      <BurgerMenu />
    </>
  )
}
