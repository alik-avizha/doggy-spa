import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={13}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#2B2B2B"
      fillRule="evenodd"
      d="m6.547.725 1.15 1.125L2.99 6.458l4.706 4.608-1.149 1.125L.692 6.458 6.547.725Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const LeftIcon = memo(ForwardRef)
