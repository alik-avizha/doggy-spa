import { useRouter } from 'next/navigation'
import type { FC } from 'react'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Gap } from '@/components/gap'
import { Typography } from '@/components/typography'
import { Routes } from '@/contstants/routes'
import type { AnimalItem } from '@/contstants/types'

import { CardWrapper, InfoBlock, List, Price, Wrapper } from './styled'

type Props = {
  title: string
  titleButton: string
  items: AnimalItem[]
}
export const AnimalInfoList: FC<Props> = ({ titleButton, title, items }) => {
  const router = useRouter()
  const handle = () => {
    router.push(Routes[1].href)
  }

  return (
    <Wrapper>
      <Typography as="h2" variant="size_66" textAlign="center">
        {title}
      </Typography>
      <Gap size={50} />
      <List>
        {items.map(({ url, description, id, price, category }) => (
          <CardWrapper key={id}>
            <Card width={452} height={452} url={url} border={6} />
            <InfoBlock>
              <Typography variant="size_20">{description}</Typography>
              <Gap size={5} />
              <Typography variant="size_20">{category}</Typography>
              <Gap size={15} />
              <Price variant="size_30">{price}</Price>
            </InfoBlock>
          </CardWrapper>
        ))}
      </List>
      <Gap size={40} />
      <Button onClick={handle}>{titleButton}</Button>
    </Wrapper>
  )
}
