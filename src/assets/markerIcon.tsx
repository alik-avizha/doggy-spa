import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement> & {
    lat: number
    lng: number
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="-4 0 36 36"
    ref={ref}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#ea3030"
        d="M14 0c7.732 0 14 5.641 14 12.6C28 23.963 14 36 14 36S0 24.064 0 12.6C0 5.641 6.268 0 14 0Z"
      />
      <circle cx={14} cy={14} r={7} fill="#911a1a" fillRule="nonzero" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const MarkerIcon = memo(ForwardRef)
