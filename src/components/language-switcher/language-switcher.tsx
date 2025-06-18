'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  LangButton,
  SwitcherWrapper,
} from '@/components/language-switcher/styled'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(
    i18n.language.startsWith('ru') ? 'ru' : 'en'
  )
  const changeLanguage = async (lang: 'en' | 'ru') => {
    await i18n.changeLanguage(lang)
    setCurrentLang(lang)
  }

  return (
    <SwitcherWrapper role="group" aria-label="Language switcher">
      <LangButton
        type="button"
        active={currentLang === 'en'}
        onClick={() => changeLanguage('en')}
        aria-pressed={currentLang === 'en'}
      >
        EN
      </LangButton>
      <LangButton
        type="button"
        active={currentLang === 'ru'}
        onClick={() => changeLanguage('ru')}
        aria-pressed={currentLang === 'ru'}
      >
        RU
      </LangButton>
    </SwitcherWrapper>
  )
}
