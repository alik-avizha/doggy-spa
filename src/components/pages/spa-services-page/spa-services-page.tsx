import {
  Border,
  InfoWrapper,
  ServiceDescription,
  ServicePrice,
  ServiceTitle,
  Title,
  Wrapper,
} from './styled.css'

export const SpaServicesPage = () => (
  <Wrapper>
    <Title variant="size_70">Spa Services</Title>
    <Border />
    <InfoWrapper>
      <ServiceTitle variant="size_35">
        Dog or Cat Full Spa Treatment
      </ServiceTitle>
      <ServicePrice variant="size_35">$549</ServicePrice>
      <ServiceDescription variant="size_35">
        Bath, massage, full grooming of hair and nails (comes with a take home
        bath kit and animal treats).
      </ServiceDescription>
      <ServiceTitle variant="size_35">Dog or Cat Body Massage</ServiceTitle>
      <ServicePrice variant="size_35">$149</ServicePrice>
      <ServiceDescription variant="size_35">
        Massaging of the paws, thighs, head and of course, behind the ears
        (comes with animal treats).
      </ServiceDescription>
      <ServiceTitle variant="size_35">
        Doggy Facial and Fur Cleanse Treatment
      </ServiceTitle>
      <ServicePrice variant="size_35">$269</ServicePrice>
      <ServiceDescription variant="size_35">
        Dogs receive a facial with our vegan, cruelty free face products and
        cleansing of any dirt left hiding in their beautiful fur (comes with a
        take home face products and animal treats).
      </ServiceDescription>
      <ServiceTitle variant="size_35">
        Cat Facial and Fur Cleanse Treatment
      </ServiceTitle>
      <ServicePrice variant="size_35">$219</ServicePrice>
      <ServiceDescription variant="size_35">
        Cat receives a facial with our vegan, cruelty free face products and
        cleansing of any dirt left hidding in their fur (comes with a take home
        face products and animal treats).
      </ServiceDescription>
      <ServiceTitle variant="size_35">
        Cat and Dog Swim Spa Retreat
      </ServiceTitle>
      <ServicePrice variant="size_35">$999</ServicePrice>
      <ServiceDescription variant="size_35">
        Take your animal on an amazing journey retreat in the woods with a
        scratch proof tent, feline repellant protector and sticks galore (for
        dogs, of course). There is a sauna that is for the animal owners and a
        smaller bath for your pets (comes with a cute animal raincoat and
        boots).
      </ServiceDescription>
    </InfoWrapper>
    <Border />
  </Wrapper>
)
