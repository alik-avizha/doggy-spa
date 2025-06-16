'use client'

import { Card } from '@/components/card'
import { Typography } from '@/components/typography'

import { CardTextWrapper, TextBlock, Wrapper } from './styled'

export const BlogPage = () => (
  <Wrapper>
    <Typography size="xxxxl" textAlign="center" marginBt="s" as="h2">
      The Bark Chronicles
    </Typography>
    <Typography
      fontWeight="s"
      fontFamily="tangerine"
      size="xxl"
      as="h3"
      textAlign="center"
      marginBt="xxl"
    >
      The Bark Chronicles
    </Typography>
    <Typography size="xl">
      Rex, The Dog Who Never Stops Playing ... Ever
    </Typography>
    <CardTextWrapper>
      <Card width={628} height={562} url="/images/darinka.webp" border={6} />
      <TextBlock>
        <Typography size="l" fontWeight="s" textAlign="center">
          Sometimes it is difficult to get dogs interested in the toys you buy
          for them. .. Luckily for Rex, everything he sees is a potential toy
          for him! Never let him around your valuables or any socks. He will
          steal them and you will never see them again...
        </Typography>
      </TextBlock>
    </CardTextWrapper>
    <CardTextWrapper>
      <TextBlock>
        <Typography size="l" fontWeight="s" textAlign="center">
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
        </Typography>
      </TextBlock>
      <Card width={644} height={584} url="/images/matthew.webp" border={6} />
    </CardTextWrapper>
  </Wrapper>
)
