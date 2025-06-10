'use client'

import { useEffect, useState } from 'react'

import { Gap } from '@/components/gap/gap'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'
import type { Dog } from '@/contstants/types'
import { useDebounce } from '@/hooks'
import { getDogByNameService } from '@/services'

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
  const [data, setData] = useState<null | Dog>(null)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      return
    }

    const fetchDogs = async () => {
      const dog = await getDogByNameService(debouncedSearch)
      setData(dog)
    }

    fetchDogs()
  }, [debouncedSearch])

  const handleChange = (value: string) => {
    setSearch(value)
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
          {data && (
            <SearchCurrentDog variant="size_30">
              {data?.breed_group}
            </SearchCurrentDog>
          )}
        </SelectionBlock>
        <TextFieldWrapper>
          <TextField
            placeholder="Search"
            type="searchType"
            onChangeText={handleChange}
          />
        </TextFieldWrapper>
      </SearchBlock>
      <Gap size={150} />
      {data ? (
        <>
          <PhotoBlock>
            <ImageStyled
              src={data.image?.url}
              alt={data.name}
              width={200}
              height={200}
            />
            <Gap size={30} />
            <Typography variant="size_64">{data.name}</Typography>
          </PhotoBlock>
          <Gap size={100} />
          <DescriptionWrapper>
            <Typography variant="size_40">Bred for: {data.bred_for}</Typography>
            <Typography variant="size_40">
              Temperament: {data.temperament}
            </Typography>
            <Typography variant="size_40">
              Life span: {data.life_span}
            </Typography>
          </DescriptionWrapper>
        </>
      ) : (
        <Typography variant="size_40" textAlign="center">
          Try to find dog
        </Typography>
      )}
    </Wrapper>
  )
}
