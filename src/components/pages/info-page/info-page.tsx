import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'

import {
  Description,
  DescriptionWrapper,
  ImageStyled,
  PhotoBlock,
  SearchBlock,
  SearchCurrentDog,
  SelectionBlock,
  TextFieldWrapper,
  Title,
  Wrapper,
} from './styled.css'

export const InfoPage = () => (
  <Wrapper>
    <Title variant="size_70">INFO DOG</Title>
    <SearchBlock>
      <SelectionBlock>
        <Description variant="size_30">Current Selection:</Description>
        <SearchCurrentDog variant="size_30">Beds & Cushions</SearchCurrentDog>
      </SelectionBlock>
      <TextFieldWrapper>
        <TextField placeholder="Search" type="searchType" />
      </TextFieldWrapper>
    </SearchBlock>
    <PhotoBlock>
      <ImageStyled
        src="/images/doggy.webp"
        alt="собака"
        width={200}
        height={200}
      />
      <Typography variant="size_64">Siberian Husky</Typography>
    </PhotoBlock>
    <DescriptionWrapper>
      <Typography variant="size_40">Energy: 5</Typography>
      <Typography variant="size_40">Min life expectancy: 5</Typography>
      <Typography variant="size_40">Good with strangers: 5</Typography>
      <Typography variant="size_40">Good with other dogs: 5</Typography>
    </DescriptionWrapper>
  </Wrapper>
)
