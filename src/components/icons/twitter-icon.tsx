import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={34}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="url(#a)"
      d="M38.467 3.995a14.879 14.879 0 0 1-4.523 1.338C35.589 4.271 36.82 2.6 37.407.63a15.042 15.042 0 0 1-5.002 2.062C31.22 1.324 29.648.418 27.935.113a7.379 7.379 0 0 0-5 .894c-1.53.884-2.746 2.288-3.46 3.995a9.126 9.126 0 0 0-.49 5.444 21.094 21.094 0 0 1-8.993-2.578c-2.797-1.53-5.265-3.679-7.243-6.305a9.019 9.019 0 0 0-1.065 4.274c0 1.4.319 2.778.93 4.012a8.31 8.31 0 0 0 2.573 3.064A7.422 7.422 0 0 1 1.62 11.85v.11c0 1.962.629 3.865 1.78 5.384 1.152 1.52 2.755 2.562 4.538 2.95a7.369 7.369 0 0 1-3.557.147c.503 1.689 1.483 3.166 2.802 4.224 1.32 1.058 2.912 1.645 4.556 1.677-2.79 2.364-6.236 3.646-9.783 3.64a14.6 14.6 0 0 1-1.88-.118c3.6 2.499 7.792 3.825 12.072 3.82 14.49 0 22.411-12.953 22.411-24.187 0-.365-.008-.733-.023-1.098A16.773 16.773 0 0 0 38.463 4l.004-.006Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={1.949}
        x2={25.547}
        y1={2.552}
        y2={26.553}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E89B93" />
        <stop offset={1} stopColor="#E89B93" />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const TwitterIcon = memo(ForwardRef)
