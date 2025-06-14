'use client'

import { Card } from '@/components/card'
import { Gap } from '@/components/gap/gap'
import { Typography } from '@/components/typography'

import { CardTextWrapper, TextBlock, Wrapper } from './styled'

export const AboutUsPage = () => (
  <Wrapper>
    <Typography size={70} textAlign="center">
      About Us
    </Typography>
    <Gap size={20} />
    <Typography
      fontWeight={400}
      fontFamily="Tangerine"
      size={40}
      as="h3"
      textAlign="center"
    >
      Our Owners Love Dogs and Cats Only
    </Typography>
    <Gap size={140} />
    <CardTextWrapper>
      <Card
        width={427}
        height={460}
        url="/images/rectangle_224.webp"
        border={6}
      />
      <TextBlock>
        <Typography size={30} fontWeight={400} textAlign="center">
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
        <Typography size={30} fontWeight={400} textAlign="center">
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
        width={507}
        height={487}
        url="/images/rectangle_225.webp"
        border={6}
      />
    </CardTextWrapper>
  </Wrapper>
)
