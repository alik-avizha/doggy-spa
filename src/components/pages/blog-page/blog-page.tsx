'use client'

import { Card } from '@/components/card'
import { Gap } from '@/components/gap/gap'
import { Typography } from '@/components/typography'

import {
  CardTextWrapper,
  Description,
  Text,
  TextBlock,
  Wrapper,
} from './styled'

export const BlogPage = () => (
  <Wrapper>
    <Typography variant="size_70" textAlign="center">
      The Bark Chronicles
    </Typography>
    <Gap size={20} />
    <Description variant="size_40" as="h3" textAlign="center">
      The Bark Chronicles
    </Description>
    <Gap size={40} />
    <Typography variant="size_35">
      Rex, The Dog Who Never Stops Playing ... Ever
    </Typography>
    <Gap size={40} />
    <CardTextWrapper>
      <Card width={627} height={562} url="/images/doggy.webp" />
      <TextBlock>
        <Text variant="size_30" textAlign="center">
          Sometimes it is difficult to get dogs interested in the toys you buy
          for them. .. Luckily for Rex, everything he sees is a potential toy
          for him! Never let him around your valuables or any socks. He will
          steal them and you will never see them again...
        </Text>
      </TextBlock>
    </CardTextWrapper>
    <CardTextWrapper>
      <TextBlock>
        <Text variant="size_30" textAlign="center">
          One day, we started noticing Rex was ripping apart all of our sheets
          when he was bored except for this blanket over here. Rex decided to
          spare this ugly white blanket that my grandmother gave me from her war
          days. We never threw it away because we felt bad. Seeing Rex sleep on
          this blanket made us happy. At least someone was using this blanket,
          even if we had to rebuy brand new sheets because we have such an
          amazing dog.
          <br />
          <br />
          <br />
          We love you Rex.
        </Text>
      </TextBlock>
      <Card width={644} height={584} url="/images/doggy.webp" />
    </CardTextWrapper>
  </Wrapper>
)
