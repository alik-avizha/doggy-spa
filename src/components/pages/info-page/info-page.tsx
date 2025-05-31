import { Gap } from '@/components/gap/gap'
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
  Wrapper,
} from './styled.css'

export const InfoPage = () => (
  <Wrapper>
    <Typography variant="size_70" textAlign="center">
      INFO DOG
    </Typography>
    <Gap size={100} />
    <SearchBlock>
      <SelectionBlock>
        <Description variant="size_30">Current Selection:</Description>
        <Gap direction="horizontal" size={10} />
        <SearchCurrentDog variant="size_30">Beds & Cushions</SearchCurrentDog>
      </SelectionBlock>
      <TextFieldWrapper>
        <TextField placeholder="Search" type="searchType" />
      </TextFieldWrapper>
    </SearchBlock>
    <Gap size={150} />
    <PhotoBlock>
      <ImageStyled
        src="/images/doggy.webp"
        alt="собака"
        width={200}
        height={200}
      />
      <Gap size={30} />
      <Typography variant="size_64">Siberian Husky</Typography>
    </PhotoBlock>
    <Gap size={100} />
    <DescriptionWrapper>
      <Typography variant="size_40">Energy: 5</Typography>
      <Typography variant="size_40">Min life expectancy: 5</Typography>
      <Typography variant="size_40">Good with strangers: 5</Typography>
      <Typography variant="size_40">Good with other dogs: 5</Typography>
    </DescriptionWrapper>
  </Wrapper>
)
