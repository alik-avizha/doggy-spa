import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="none"
      stroke="#4C4C4B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.333 31.667c7.364 0 13.334-5.97 13.334-13.334C31.667 10.97 25.697 5 18.333 5 10.97 5 5 10.97 5 18.333c0 7.364 5.97 13.334 13.333 13.334ZM35 35l-7.25-7.25"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SearchIcon = memo(ForwardRef)
