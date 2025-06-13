import { useRouter } from 'next/navigation'
import type { FC } from 'react'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Gap } from '@/components/gap'
import { Typography } from '@/components/typography'
import { Routes } from '@/constants/routes'
import type { AnimalItem } from '@/types'

import { CardWrapper, InfoBlock, List, Wrapper } from './styled'

type Props = {
  title: string
  titleButton: string
  items: AnimalItem[]
}
export const AnimalInfoList: FC<Props> = ({ titleButton, title, items }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(Routes[1].href)
  }

  return (
    <Wrapper>
      <Typography as="h2" size={66} textAlign="center">
        {title}
      </Typography>
      <Gap size={50} />
      <List>
        {items.map(({ url, description, id, price, category }) => (
          <CardWrapper key={id}>
            <Card width={435} height={445} url={url} border={6} />
            <InfoBlock>
              <Typography size={20}>{description}</Typography>
              <Gap size={5} />
              <Typography size={20}>{category}</Typography>
              <Gap size={15} />
              <Typography size={30}>{price}</Typography>
            </InfoBlock>
          </CardWrapper>
        ))}
      </List>
      <Gap size={40} />
      <Button onClick={handleClick}>{titleButton}</Button>
    </Wrapper>
  )
}
