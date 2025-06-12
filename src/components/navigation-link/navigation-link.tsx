import Link from 'next/link'
import type { FC, PropsWithChildren } from 'react'

import { StyledAnchor } from './styled'

type Props = {
  href: string
  isActive: boolean
}
export const NavigationLink: FC<Props & PropsWithChildren> = ({
  href,
  isActive,
  children,
}) => (
  <Link href={href} passHref legacyBehavior>
    <StyledAnchor isActive={isActive}>{children}</StyledAnchor>
  </Link>
)
