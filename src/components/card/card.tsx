import Image from 'next/image'
import type { FC } from 'react'
import { useState } from 'react'

import {
  ButtonsWrapper,
  CardContainer,
  CircleButton,
  ImageWrapper,
} from './styled'

type Props = {
  width: number
  height: number
  url: string | string[]
  border?: number
}
export const Card: FC<Props> = ({ width, height, url, border = 10 }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = Array.isArray(url) ? url.slice(0, 2) : [url]
  const handleClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  }

  return (
    <CardContainer width={width} height={height} border={border}>
      {images.length > 1 && (
        <ButtonsWrapper>
          {images.map((_, idx) => (
            <CircleButton
              key={idx}
              active={idx === activeIndex}
              onClick={() => handleClick(idx)}
              aria-label={`Show image ${idx + 1}`}
            />
          ))}
        </ButtonsWrapper>
      )}
      {images.map((url, idx) => (
        <ImageWrapper
          key={idx}
          active={idx === activeIndex}
          width={width}
          height={height}
        >
          <Image
            src={url}
            alt={`Card Image ${idx + 1}`}
            fill
            objectFit="cover"
          />
        </ImageWrapper>
      ))}
    </CardContainer>
  )
}
