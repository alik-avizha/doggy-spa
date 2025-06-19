import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { NavigationLink } from '@/components/navigation-link'
import { ROUTES_WITH_LABEL } from '@/constants'

import { BurgerBlock, BurgerButton, BurgerItems } from './styled'

export const BurgerMenu = () => {
  const { t } = useTranslation()
  const pathname = usePathname()
  const burgerItemsRef = useRef<HTMLDivElement | null>(null)
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null)

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    if (!menuIsOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        burgerItemsRef.current &&
        !burgerItemsRef.current.contains(target) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(target)
      ) {
        setMenuIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [menuIsOpen])

  const onBurgerBtnClick = () => {
    setMenuIsOpen(prev => !prev)
  }

  return (
    <BurgerBlock>
      <BurgerItems ref={burgerItemsRef} isOpen={menuIsOpen}>
        {ROUTES_WITH_LABEL.map(({ href, label }) => (
          <NavigationLink key={href} href={href} isActive={pathname === href}>
            {t(label)}
          </NavigationLink>
        ))}
      </BurgerItems>
      <BurgerButton ref={burgerButtonRef} onClick={onBurgerBtnClick}>
        ☰
      </BurgerButton>
    </BurgerBlock>
  )
}
