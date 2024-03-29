import React from 'react'
import { useSize, useMeasure } from 'react-use'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeColor, colors } from '../theme'
import connectionsUrl from '../img/connections.svg'
import { useAnimationFrame } from '../hooks/useAnimationFrame'
import { getRandomFloat } from '../utils/Number'

type RigidBody = {
  width: number
  height: number
  x: number
  y: number
  rotation: number
}
// Resources for path animation https://css-tricks.com/svg-path-syntax-illustrated-guide/
// http://tutorials.jenkov.com/svg/path-element.html
export const Plane: React.FC<{ color: ThemeColor }> = props => (
  <svg fill={props.color} width="20" height="20">
    <path
      fill={props.color}
      d="M20,13.7v-1.4l-8.6-5.1V3.5c0-1-0.6-3.5-1.4-3.5S8.6,2.4,8.6,3.5v3.7L0,12.2v1.4l8.6-1.8l0.5,5l-2.5,1.9V20
  l3.5-0.8l3.5,0.8v-1.2L11,16.9l0.5-5L20,13.7z"
    />
  </svg>
)

// How much variance between these values we want when randomly placing planes
const PLANE_VARIANCE_X = 120
const PLANE_VARIANCE_Y = 80

// Gets the plane angle/rotation
// this was sort of random I was just guessing
function getPlaneX2(
  t: number,
  amplitude: number,
  a: number,
  b: number,
  c: number,
) {
  return (
    a * Math.sin(amplitude * (t + c)) +
    b * Math.cos(amplitude * (t + c)) /*  +
    c * Math.sin(amplitude * t) */
  )
}

export const Translation: React.FC<RigidBody> = props => (
  <div
    style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginLeft: -props.width / 2 + 'px',
      marginTop: -props.height / 2 + 'px',
      width: props.width + 'px',
      height: props.height + 'px',
      transform: `translate3d(${props.x}px, ${props.y}px, 0) rotate(${props.rotation}deg)`,
    }}
  >
    {props.children}
  </div>
)

type PlaneAnimationProps = {
  numPlanes: number
  colorBackground?: keyof typeof colors
}

export const PlaneAnimation: React.FC<PlaneAnimationProps> = props => {
  const [ts] = useAnimationFrame()
  const { colorBackground = 'blue' } = props
  const [svgContainerRef, svgContainerRefOffset] = useMeasure()
  const zeroToNArray = [...Array(props.numPlanes)].map((_, i) => i)
  const randomSeeds = React.useMemo(
    () =>
      zeroToNArray.map(_ => ({
        x: getRandomFloat(-1, 1),
        y: getRandomFloat(-1, 1),
        a: getRandomFloat(-2, 8),
        b: getRandomFloat(-5, 5),
        c: getRandomFloat(0, 20000),
      })),
    [],
  )

  const attrsNArray = zeroToNArray.map(i => {
    const seed = randomSeeds[i]
    // dx/dy is change from center point
    const dx =
      PLANE_VARIANCE_X * seed.x +
      getPlaneX2(ts, 1 / 1000, seed.a, seed.b, seed.c)
    const dy = PLANE_VARIANCE_Y * seed.y
    const rotation = getPlaneX2(ts, 1 / 1000, seed.a, seed.b, seed.c)
    return [dx, dy, rotation]
  })
  const colorChoice: Array<keyof typeof colors> = Object.keys(colors).filter(
    k => k !== colorBackground,
  ) as any
  //   const colorChoice: Array<keyof typeof colors> = Object.keys(colors) as any

  return (
    <>
      <Grid />
      <Gradient colorBackground={colorBackground} ref={svgContainerRef}>
        {zeroToNArray.map(i => {
          const [dx, dy, rotation] = attrsNArray[i]

          return (
            <Translation
              key={`plane-${i}`}
              width={20}
              height={20}
              x={dx}
              y={dy}
              rotation={rotation}
            >
              <Plane color={colors[colorBackground][0]} />
            </Translation>
          )
        })}
        <svg
          width={svgContainerRefOffset.width}
          height={svgContainerRefOffset.height}
        >
          <g
            transform={`matrix(1 0 0 -1 ${svgContainerRefOffset.width /
              2} ${svgContainerRefOffset.height / 2})`}
          >
            {zeroToNArray.map(i => {
              const [dx, dy, rotation] = attrsNArray[i]
              const cx = dx + -rotation * 1.5

              return (
                <path
                  key={`line-${i}`}
                  d={`
                    M ${dx} ${dy * -1}
                    C ${cx} ${dy * -1}, ${cx} -${svgContainerRefOffset.height /
                    2}, ${dx} -${svgContainerRefOffset.height / 2}
                  `.trim()}
                  stroke={colors[colorChoice[i % (colorChoice.length - 1)]][5]}
                  fill="transparent"
                  stroke-widh="5"
                  stroke-dasharray="4"
                />
              )
            })}
          </g>
        </svg>
      </Gradient>
    </>
  )
}

const translateUp = keyframes`
  from {
    background-position-y: 0;
  }

  to {
    background-position-y: 10000px;
  }
`

const dashAnimation = keyframes`
  from {
    stroke-dashoffset: 0px;
  }

  from {
    stroke-dashoffset: 24px;
  }
`

const Gradient = styled<'div', { colorBackground: keyof typeof colors }>('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    ${props => colors[props.colorBackground][6]} 15%,
    rgba(0, 0, 0, 0) 100%
  );

  & path {
    animation: ${dashAnimation} 1s linear infinite;
  }
`

const Grid = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("${connectionsUrl}");
  animation: ${translateUp} ${10000 / 20}s linear infinite;
`
