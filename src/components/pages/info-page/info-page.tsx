'use client'

import { useEffect, useState } from 'react'

import { Gap } from '@/components/gap'
import { Notification } from '@/components/notification'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'
import { useDebounce } from '@/hooks'
import { getDogByNameService } from '@/services'
import type { Dog } from '@/types'

import { SearchInfo } from './search-info'
import {
  Description,
  SearchBlock,
  SearchCurrentDog,
  SelectionBlock,
  TextFieldWrapper,
  Wrapper,
} from './styled'

export const InfoPage = () => {
  const [data, setData] = useState<null | Dog>(null)
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const [notification, setNotification] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      setData(null)
      setHasSearched(false)
      return
    }
    const fetchDogs = async () => {
      const dog = await getDogByNameService(debouncedSearch)
      setData(dog)
      setHasSearched(true)
    }

    fetchDogs().catch(error => {
      console.error('Some error by fetching info', error)
      setNotification(true)
      setHasSearched(true)
    })
  }, [debouncedSearch])

  const handleChange = (value: string) => {
    setSearch(value)
  }

  const onCloseNotify = () => setNotification(false)

  return (
    <Wrapper>
      <Typography size={70} textAlign="center">
        INFO DOG
      </Typography>
      <Gap size={100} />
      <SearchBlock>
        <SelectionBlock>
          <Description
            variant="size_30"
            fontWeight={400}
            fontFamily="Cinzel Decorative"
          >
            Current Selection:
          </Description>
          <Gap direction="horizontal" size={10} />
          {data && (
            <SearchCurrentDog
              variant="size_30"
              fontFamily="Cinzel Decorative"
              fontWeight={400}
            >
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
      <SearchInfo data={data} hasSearched={hasSearched} />
      {notification && (
        <Notification
          message="An error occurred while searching for information. Please try again later."
          type="error"
          onClose={onCloseNotify}
        />
      )}
    </Wrapper>
  )
}
