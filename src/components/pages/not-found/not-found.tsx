'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/button'

import { InfoBlock, Wrapper } from './styled'

export const NotFoundPage = () => {
  const router = useRouter()
  const handleBookClick = () => {
    router.push('/')
  }

  return (
    <Wrapper>
      <InfoBlock>
        <Button onClick={handleBookClick}>Go to main page</Button>
      </InfoBlock>
    </Wrapper>
  )
}
