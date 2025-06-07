'use client'

import type { ChangeEvent } from 'react'

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
} from './styled'

export const InfoPage = () => {
  // const [dogs, setDogs] = useState([])
  // const [loading, setLoading] = useState(false)

  // const handleUpdate = async () => {
  //   setLoading(true)
  //   await fetch('/api/updateDogs')
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   handleUpdate()
  // }, [])

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    // setLoading(true)
    const res = await fetch(`/api/dogs?name=${e.currentTarget.value}`)
    const data = await res.json()

    console.log('dogs', data)
    // setDogs(data)
    // setLoading(false)
  }

  return (
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
          <TextField
            placeholder="Search"
            type="searchType"
            onChange={handleSearch}
          />
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
}
