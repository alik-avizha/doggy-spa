import type { FC } from 'react'

import {
  CardWrapper,
  InfoBlock,
  List,
  Price,
  Text,
  Title,
  Wrapper,
} from '@/components/animal-info-list/styled.css'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import type { AnimalItem } from '@/contstants/types'

type Props = {
  title: string
  titleButton: string
  items: AnimalItem[]
}
export const AnimalInfoList: FC<Props> = ({ titleButton, title, items }) => (
  <Wrapper>
    <Title as="h2" variant="size_66">
      {title}
    </Title>
    <List>
      {items.map(({ url, description, id, price, category }) => (
        <CardWrapper key={id}>
          <Card width={423} height={431} url={url} />
          <InfoBlock>
            <Text variant="size_20">{description}</Text>
            <Text variant="size_20">{category}</Text>
            <Price variant="size_30">{price}</Price>
          </InfoBlock>
        </CardWrapper>
      ))}
    </List>
    <Button>{titleButton}</Button>
  </Wrapper>
)
