import Link from 'next/link'
import type { FC, PropsWithChildren } from 'react'

import { StyledAnchor } from './styled'

type Props = {
  href: string
  isActive: boolean
  dataTestId?: string
}
export const NavigationLink: FC<Props & PropsWithChildren> = ({
  href,
  isActive,
  children,
  dataTestId,
}) => (
  <Link href={href} passHref legacyBehavior data-testid={dataTestId}>
    <StyledAnchor isActive={isActive} data-testid={dataTestId}>
      {children}
    </StyledAnchor>
  </Link>
)
