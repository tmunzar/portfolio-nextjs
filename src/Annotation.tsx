import React, {
  CSSProperties,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import Vivus from 'vivus'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface IAnnotationProps {
  text: string
  speed?: number
  className?: string
  textRotate?: string
  style?: CSSProperties
  arrowProps?: {
    flip?: boolean
    rotate?: string
    size?: number
    color?: string
    translate?: string
    thickness?: number
  }
  animProps: {
    animOffset?: number
    animDelay?: number
    animDuration?: number
    initiallyVisible?: boolean
    onScroll?: boolean
  }
}

const Annotation = (props: IAnnotationProps): ReactElement => {
  const { className, speed, arrowProps, animProps, textRotate, text, style } =
    props
  const {
    animDuration = 0.4,
    animDelay = 0,
    animOffset = 150,
    onScroll,
    initiallyVisible = false,
  } = animProps
  const arrowRef = useRef<SVGSVGElement>(null)
  const noScrollRef = useRef<HTMLDivElement>(null)
  const [vivusState, setVivusState] = useState<Vivus>()

  useEffect(() => {
    const currentRef = arrowRef.current as unknown as string // wonky type casting ?
    setVivusState(
      new Vivus(currentRef, {
        duration: 30,
        type: 'oneByOne',
        pathTimingFunction: Vivus.EASE_IN,
        start: 'manual',
      })
    )
  }, [arrowRef, speed, animDelay, onScroll])

  useEffect(() => {
    if (!onScroll)
      noScrollRef.current?.classList.add(
        'animate__animated',
        'animate__jackInTheBox',
        'animate__delay-0.4s'
      )
  })

  const afterAnimate = () => vivusState?.play()

  const arrowTransforms = []
  if (arrowProps?.flip) arrowTransforms.push('scale(-1,1)')
  if (arrowProps?.rotate) arrowTransforms.push(`rotate(${arrowProps.rotate})`)
  if (arrowProps?.translate)
    arrowTransforms.push(`translate(${arrowProps.translate})`)

  const Text = () => (
    <div
      className={`annotation-text`}
      style={{ transform: `rotate(${textRotate})` }}
    >
      {text}
    </div>
  )

  return (
    <div id="annotation" style={style} className={className}>
      {animProps.onScroll ? (
        <AnimationOnScroll
          animateIn="animate__jackInTheBox"
          offset={animOffset}
          delay={animDelay}
          initiallyVisible={initiallyVisible}
          afterAnimatedIn={afterAnimate}
          duration={animDuration}
          animateOnce
        >
          <Text />
        </AnimationOnScroll>
      ) : (
        <div
          ref={noScrollRef}
          onAnimationEnd={() => afterAnimate()}
          style={{
            animationDuration: `${animDuration}s`,
            animationDelay: `${animDelay / 1000}s`,
          }}
        >
          <Text />
        </div>
      )}
      <svg
        ref={arrowRef}
        width={arrowProps?.size || 50}
        viewBox="0 0 229 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: arrowTransforms.join(' ') }}
        className="arrow"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M27.7529 6.5L28.9525 3.84509C24.7478 13.1069 21.7387 20.1735 19.9253 25.0448C18.1119 29.9161 16.7372 35.1144 14 44.5C12.3534 50.3942 13.0931 50.5 11.08 62.5C10.0271 68.7757 8.1906 82.5 8.00001 92C7.7687 103.53 7.83168 120.689 11.08 132.5C12.9061 139.14 14.4557 143.348 17.9944 152.306C19.8316 156.956 23.6574 164.51 29.472 174.969C36.0116 185.608 41.3945 193.534 45.6205 198.748C49.8465 203.963 56.4871 210.699 65.5421 218.957C75.0034 227.606 83.0533 234.335 89.6917 239.142C96.3301 243.95 106.684 250.464 120.755 258.684C134.265 266.078 144.843 271.501 152.489 274.953C156.796 276.897 162.052 279.532 169.049 282.28C171.328 283.175 174.146 283.824 176.711 284.804C176.925 284.886 184.691 287.747 184.929 287.838C186.518 288.443 187.961 288.9 189.257 289.21"
          stroke={arrowProps?.color || '#000000'}
          strokeWidth={arrowProps?.size || 7}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M153.631 197.841C159.317 211.472 164.388 222.414 168.844 230.667C173.301 238.92 180.987 250.733 191.902 266.107L216.58 304.917C203.405 307.086 191.764 308.407 181.655 308.878C171.545 309.35 157.777 308.602 140.349 306.635C128.173 304.644 118.861 302.524 112.411 300.276C105.961 298.027 97.178 293.839 86.0609 287.711"
          stroke={arrowProps?.color || '#000000'}
          strokeWidth={arrowProps?.size || 7}
        />
      </svg>
    </div>
  )
}

export default Annotation
