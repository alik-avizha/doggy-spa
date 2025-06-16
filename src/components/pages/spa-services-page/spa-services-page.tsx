'use client'

import { Typography } from '@/components/typography'

import { Border, InfoWrapper, Wrapper } from './styled'

export const SpaServicesPage = () => (
  <Wrapper>
    <Typography size="xxxxl" textAlign="center" marginBt="xxl" as="h2">
      Spa Services
    </Typography>
    <Border />
    <InfoWrapper>
      <Typography
        size="xl"
        textAlign="center"
        marginTp="xxl"
        marginBt="xs"
        as="h3"
      >
        Dog or Cat Full Spa Treatment
      </Typography>
      <Typography size="xl" textAlign="center" marginBt="l">
        $549
      </Typography>
      <Typography size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
        Bath, massage, full grooming of hair and nails (comes with a take home
        bath kit and animal treats).
      </Typography>
      <Typography
        size="xl"
        textAlign="center"
        marginTp="xxl"
        marginBt="xs"
        as="h3"
      >
        Dog or Cat Body Massage
      </Typography>
      <Typography size="xl" textAlign="center" marginBt="l">
        $149
      </Typography>
      <Typography size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
        Massaging of the paws, thighs, head and of course, behind the ears
        (comes with animal treats).
      </Typography>
      <Typography
        size="xl"
        textAlign="center"
        marginTp="xxl"
        marginBt="xs"
        as="h3"
      >
        Doggy Facial and Fur Cleanse Treatment
      </Typography>
      <Typography size="xl" textAlign="center" marginBt="l">
        $269
      </Typography>
      <Typography size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
        Dogs receive a facial with our vegan, cruelty free face products and
        cleansing of any dirt left hiding in their beautiful fur (comes with a
        take home face products and animal treats).
      </Typography>
      <Typography
        size="xl"
        textAlign="center"
        marginTp="xxl"
        marginBt="xs"
        as="h3"
      >
        Cat Facial and Fur Cleanse Treatment
      </Typography>
      <Typography size="xl" textAlign="center" marginBt="l">
        $219
      </Typography>
      <Typography size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
        Cat receives a facial with our vegan, cruelty free face products and
        cleansing of any dirt left hidding in their fur (comes with a take home
        face products and animal treats).
      </Typography>
      <Typography
        size="xl"
        textAlign="center"
        marginTp="xxl"
        marginBt="xs"
        as="h3"
      >
        Cat and Dog Swim Spa Retreat
      </Typography>
      <Typography size="xl" textAlign="center" marginBt="l">
        $999
      </Typography>
      <Typography size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
        Take your animal on an amazing journey retreat in the woods with a
        scratch proof tent, feline repellant protector and sticks galore (for
        dogs, of course). There is a sauna that is for the animal owners and a
        smaller bath for your pets (comes with a cute animal raincoat and
        boots).
      </Typography>
    </InfoWrapper>
    <Border />
  </Wrapper>
)
