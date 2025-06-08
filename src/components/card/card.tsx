import Image from 'next/image'
import type { FC } from 'react'

import { CardContainer } from './styled'

type Props = {
  width: number
  height: number
  url: string
  border?: number
}
export const Card: FC<Props> = ({ width, height, url, border = 10 }) => (
  <CardContainer width={width} height={height} border={border}>
    <Image src={url} alt="Card Image" layout="fill" objectFit="cover" />
  </CardContainer>
)
