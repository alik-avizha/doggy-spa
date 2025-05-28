import styled from '@emotion/styled'
import Image from 'next/image'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: 70px 50px;
`

export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 100px;
`

export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;
`
export const SelectionBlock = styled.div`
  display: flex;
  gap: 10px;
`

export const SearchCurrentDog = styled(Typography)`
  font-weight: 700;
  font-family: Cormorant, sans-serif;
  color: #e89b93;
`
export const Description = styled(Typography)`
  font-weight: 700;
  font-family: Cormorant, sans-serif;
`

export const TextFieldWrapper = styled.div`
  width: 337px;
`

export const PhotoBlock = styled.div`
  background-color: #f3ded7;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`

export const ImageStyled = styled(Image)`
  width: 730px;
  height: 486px;
  margin-bottom: 30px;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 200px;
`
