import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#2B2B2B"
      fillRule="evenodd"
      d="M1.399 11.772.25 10.647 4.956 6.04.25 1.431 1.399.306 7.254 6.04 1.4 11.772Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const RightIcon = memo(ForwardRef)
