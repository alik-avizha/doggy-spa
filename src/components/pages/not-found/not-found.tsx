'use client'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import { Route } from '@/constants'

import { InfoBlock, Wrapper } from './styled'

export const NotFoundPage = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const handleBookClick = () => {
    router.push(Route.home)
  }

  return (
    <Wrapper>
      <InfoBlock>
        <Button onClick={handleBookClick}>{t('notFound.goToMainPage')}</Button>
      </InfoBlock>
    </Wrapper>
  )
}
