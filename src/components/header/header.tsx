'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { StyledHeader } from '@/components/header/styled.css'
import { TitleLink } from '@/components/link'
import { Routes } from '@/contstants/routes'

export function Header() {
  const pathname = usePathname()
  return (
    <StyledHeader>
      {Routes.map(({ href, label }) => (
        <TitleLink key={href} href={href} isActive={pathname === href}>
          {label}
        </TitleLink>
      ))}
    </StyledHeader>
  )
}
