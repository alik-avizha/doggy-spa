'use client'

import { Card } from '@/components/card'
import { Typography } from '@/components/typography'

import { CardTextWrapper, TextBlock, Wrapper } from './styled'

export const AboutUsPage = () => (
  <Wrapper>
    <Typography size="xxxxl" textAlign="center" marginBt="m" as="h2">
      About Us
    </Typography>
    <Typography
      fontWeight="s"
      fontFamily="tangerine"
      size="xxl"
      as="h3"
      textAlign="center"
    >
      Our Owners Love Dogs and Cats Only
    </Typography>
    <CardTextWrapper>
      <Card
        width={428}
        height={460}
        url="/images/rectangle_224.webp"
        border={6}
      />
      <TextBlock>
        <Typography size="l" fontWeight="s" textAlign="center">
          Here at Luxe Animal Spa we aim to provide you with the best service
          possible for both you and your pet! We pride ourselves in offering a
          true first-class experience.
          <br />
          <br /> Our grooming equipment is top quality. We use only the most
          trusted brands in the industry which provides a beautiful, calming,
          and safe salon experience for your pets.
        </Typography>
      </TextBlock>
    </CardTextWrapper>
    <CardTextWrapper>
      <TextBlock>
        <Typography size="l" fontWeight="s" textAlign="center">
          All animals deserve a special spa pampering treatment, but mostly cats
          and dogs. Luxe Animal Spa offers the best spa treatments to leave your
          pets feeling amazing!
          <br />
          <br /> We are the first in Canada to offer spa treatments for cats and
          dogs. This is unheard of in many places so come, bring your amazing
          cat or dog and let us make their spa experience something they will
          never forget!
        </Typography>
      </TextBlock>
      <Card
        width={508}
        height={488}
        url="/images/rectangle_225.webp"
        border={6}
      />
    </CardTextWrapper>
  </Wrapper>
)
