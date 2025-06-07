import Link from 'next/link'
import type { FC, PropsWithChildren } from 'react'

import { defaultLink } from './styled'

type Props = {
  href: string
  isActive: boolean
}
export const TitleLink: FC<Props & PropsWithChildren> = ({
  href,
  isActive,
  children,
}) => (
  <Link href={href} className={defaultLink(isActive)}>
    {children}
  </Link>
)
