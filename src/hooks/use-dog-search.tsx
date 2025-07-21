import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  SEARCH_DOG_DEFAULT_VALUES,
  validationSearchDogSchema,
} from '@/constants'
import { getDogByNameService } from '@/services'
import type { Dog, ValidationSearchDogSchemaType } from '@/types'

import { useDebounce } from './use-debounce'

export const useDogSearch = () => {
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
  const debouncedSearch = useDebounce(searchValue, 500)

  const [data, setData] = useState<Dog | null>(null)
  const [notification, setNotification] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (errors.search || debouncedSearch.trim() === '') {
      setData(null)
      setHasSearched(false)
      return
    }

    const fetchDogs = async () => {
      try {
        setLoading(true)
        const dog = await getDogByNameService(debouncedSearch)
        setData(dog)
        setHasSearched(true)
      } catch (error) {
        console.error('Some error by fetching info', error)
        setNotification(true)
        setHasSearched(true)
      } finally {
        setLoading(false)
      }
    }

    fetchDogs()
  }, [errors.search, debouncedSearch])

  const onCloseNotify = () => setNotification(false)

  return {
    methods,
    data,
    hasSearched,
    notification,
    onCloseNotify,
    loading,
  }
}
