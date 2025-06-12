import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={34}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="url(#a)"
      d="m18.914 19.297.996-5.95h-6.224V9.484c0-1.628.869-3.215 3.657-3.215h2.829V1.204S17.605.802 15.15.802c-5.126 0-8.476 2.85-8.476 8.01v4.536H.977v5.95h5.697v14.386h7.012V19.298l5.228-.001Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={10.574}
        x2={10.574}
        y1={0.802}
        y2={33.684}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E89B93" />
        <stop offset={1} stopColor="#E89B93" />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const FacebookIcon = memo(ForwardRef)
