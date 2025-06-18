'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ControlledTextField } from '@/components/controlled-fields'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import {
  SEARCH_DOG_DEFAULT_VALUES,
  validationSearchDogSchema,
} from '@/constants'
import { useDebounce } from '@/hooks'
import { getDogByNameService } from '@/services'
import type { Dog, ValidationSearchDogSchemaType } from '@/types'

import { SearchInfo } from './search-info'
import {
  SearchBlock,
  SelectionBlock,
  TextFieldWrapper,
  Wrapper,
} from './styled'

export const InfoPage = () => {
  const { t } = useTranslation()

  const methods = useForm<ValidationSearchDogSchemaType>({
    defaultValues: SEARCH_DOG_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: yupResolver(validationSearchDogSchema),
  })

  const {
    watch,
    formState: { errors },
  } = methods
  const searchValue = watch('search')

  const [data, setData] = useState<null | Dog>(null)
  const [notification, setNotification] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const debouncedSearch = useDebounce(searchValue, 500)

  useEffect(() => {
    if (errors.search || debouncedSearch.trim() === '') {
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
  }, [errors.search, debouncedSearch])

  const onCloseNotify = () => setNotification(false)

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <Typography size="xxxxl" textAlign="center" marginBt="huge" as="h2">
          {t('info.infoDog')}
        </Typography>
        <SearchBlock>
          <SelectionBlock>
            <Typography size="xl" marginBt="xs">
              {t('info.currentSelection')}
            </Typography>
            {data && (
              <Typography size="xl" fontFamily="cormorant" color="pinkKisses">
                {data?.breed_group}
              </Typography>
            )}
          </SelectionBlock>
          <TextFieldWrapper>
            <ControlledTextField
              fieldName="search"
              placeholder={t('inputs.search')}
              type="searchType"
            />
          </TextFieldWrapper>
        </SearchBlock>
        <SearchInfo data={data} hasSearched={hasSearched} />
        {notification && (
          <Notification
            message={t('notification.anErrorOccurred')}
            type="error"
            onClose={onCloseNotify}
          />
        )}
      </Wrapper>
    </FormProvider>
  )
}
