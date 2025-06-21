import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import { Route } from '@/constants/routes'
import type { AnimalItem } from '@/types'

import { CardWrapper, InfoBlock, List, Wrapper } from './styled'

type Props = {
  title: string
  titleButton: string
  items: AnimalItem[]
  dataTestId?: string
}
export const AnimalInfoList: FC<Props> = ({
  titleButton,
  title,
  items,
  dataTestId,
}) => {
  const { t } = useTranslation()
  const router = useRouter()
  const handleClick = () => {
    router.push(Route.info)
  }

  return (
    <Wrapper>
      <Typography as="h2" size="xxxl" textAlign="center" marginBt="xxl">
        {title}
      </Typography>
      <List>
        {items.map(({ url, description, id, price, category }) => (
          <CardWrapper key={id} data-testid={`${dataTestId}-animal-card-${id}`}>
            <Card width={435} height={445} url={url} border={6} />
            <InfoBlock>
              <Typography size="m" marginBt="xxs">
                {t(description)}
              </Typography>
              <Typography size="m" marginBt="xs">
                {t(category)}
              </Typography>
              <Typography size="xl">{price}</Typography>
            </InfoBlock>
          </CardWrapper>
        ))}
      </List>
      <Button
        onClick={handleClick}
        dataTestId={`${dataTestId}-see-more-button`}
      >
        {titleButton}
      </Button>
    </Wrapper>
  )
}
