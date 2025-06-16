'use client'

import { useEffect, useState } from 'react'

import { Notification } from '@/components/notification'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'
import { useDebounce } from '@/hooks'
import { getDogByNameService } from '@/services'
import type { Dog } from '@/types'

import { SearchInfo } from './search-info'
import {
  SearchBlock,
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
      <Typography size="xxxxl" textAlign="center" marginBt="huge" as="h2">
        INFO DOG
      </Typography>
      <SearchBlock>
        <SelectionBlock>
          <Typography size="xl" marginBt="xs">
            Current Selection:
          </Typography>
          {data && (
            <Typography size="xl" fontFamily="cormorant" color="pinkKisses">
              {data?.breed_group}
            </Typography>
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
