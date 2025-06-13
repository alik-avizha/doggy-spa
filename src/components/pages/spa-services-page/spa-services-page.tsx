'use client'

import { Gap } from '@/components/gap'
import { Typography } from '@/components/typography'

import {
  Border,
  InfoWrapper,
  ServiceDescription,
  ServicePrice,
  ServiceTitle,
  Wrapper,
} from './styled'

export const SpaServicesPage = () => (
  <Wrapper>
    <Typography size={70} textAlign="center">
      Spa Services
    </Typography>
    <Gap size={50} />
    <Border />
    <Gap size={50} />
    <InfoWrapper>
      <ServiceTitle size={35} textAlign="center">
        Dog or Cat Full Spa Treatment
      </ServiceTitle>
      <ServicePrice size={35} textAlign="center">
        $549
      </ServicePrice>
      <ServiceDescription size={35} textAlign="center">
        Bath, massage, full grooming of hair and nails (comes with a take home
        bath kit and animal treats).
      </ServiceDescription>
      <ServiceTitle size={35} textAlign="center">
        Dog or Cat Body Massage
      </ServiceTitle>
      <ServicePrice size={35} textAlign="center">
        $149
      </ServicePrice>
      <ServiceDescription size={35} textAlign="center">
        Massaging of the paws, thighs, head and of course, behind the ears
        (comes with animal treats).
      </ServiceDescription>
      <ServiceTitle size={35} textAlign="center">
        Doggy Facial and Fur Cleanse Treatment
      </ServiceTitle>
      <ServicePrice size={35} textAlign="center">
        $269
      </ServicePrice>
      <ServiceDescription size={35} textAlign="center">
        Dogs receive a facial with our vegan, cruelty free face products and
        cleansing of any dirt left hiding in their beautiful fur (comes with a
        take home face products and animal treats).
      </ServiceDescription>
      <ServiceTitle size={35} textAlign="center">
        Cat Facial and Fur Cleanse Treatment
      </ServiceTitle>
      <ServicePrice size={35} textAlign="center">
        $219
      </ServicePrice>
      <ServiceDescription size={35} textAlign="center">
        Cat receives a facial with our vegan, cruelty free face products and
        cleansing of any dirt left hidding in their fur (comes with a take home
        face products and animal treats).
      </ServiceDescription>
      <ServiceTitle size={35} textAlign="center">
        Cat and Dog Swim Spa Retreat
      </ServiceTitle>
      <ServicePrice size={35} textAlign="center">
        $999
      </ServicePrice>
      <ServiceDescription size={35} textAlign="center">
        Take your animal on an amazing journey retreat in the woods with a
        scratch proof tent, feline repellant protector and sticks galore (for
        dogs, of course). There is a sauna that is for the animal owners and a
        smaller bath for your pets (comes with a cute animal raincoat and
        boots).
      </ServiceDescription>
    </InfoWrapper>
    <Gap size={50} />
    <Border />
  </Wrapper>
)
