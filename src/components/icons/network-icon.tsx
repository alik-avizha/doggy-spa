import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={33}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="url(#a)"
      d="M11.883 21.772c-.922 4.5-2.045 8.813-5.377 11.066-1.028-6.8 1.509-11.905 2.688-17.326-2.01-3.153.242-9.495 4.479-7.932 5.214 1.921-4.515 11.717 2.015 12.942 6.82 1.276 9.604-11.027 5.375-15.028-6.109-5.78-17.784-.136-16.347 8.139.349 2.023 2.59 2.635.896 5.427-3.91-.807-5.078-3.682-4.927-7.515C.926 5.272 6.73.882 12.553.272c7.363-.77 14.275 2.521 15.23 8.976 1.074 7.288-3.324 15.182-11.199 14.614-2.135-.155-3.029-1.142-4.7-2.09Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={25.948}
        x2={-4.925}
        y1={-1.908}
        y2={17.632}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E89B93" />
        <stop offset={1} stopColor="#E89B93" />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const NetworkIcon = memo(ForwardRef)
