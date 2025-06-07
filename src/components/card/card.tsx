import Image from 'next/image'
import type { FC } from 'react'

import { CardContainer } from './styled'

type Props = {
  width: number
  height: number
  url: string
}
export const Card: FC<Props> = ({ width, height, url }) => (
  <CardContainer width={width} height={height}>
    <Image src={url} alt="Card Image" layout="fill" objectFit="cover" />
  </CardContainer>
)
