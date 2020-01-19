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

export const Plane: React.FC<{ color: ThemeColor }> = props => (
  <svg fill={props.color} width="20" height="20">
    <path
      fill={props.color}
      d="M20,13.7v-1.4l-8.6-5.1V3.5c0-1-0.6-3.5-1.4-3.5S8.6,2.4,8.6,3.5v3.7L0,12.2v1.4l8.6-1.8l0.5,5l-2.5,1.9V20
  l3.5-0.8l3.5,0.8v-1.2L11,16.9l0.5-5L20,13.7z"
    />
  </svg>
)

const PLANE_VARIANCE_X = 250
const PLANE_VARIANCE_Y = 50

function getPlaneX(t: number, a: number, b: number, c: number) {
  return a * Math.sin(b * t) * Math.pow(-1, c)
}

function getPlaneX2(
  t: number,
  amplitude: number,
  a: number,
  b: number,
  c: number,
) {
  return (
    a * Math.sin(amplitude * t) +
    b * Math.sin(amplitude * t) +
    c * Math.sin(amplitude * t)
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
}

export const PlaneAnimation: React.FC<PlaneAnimationProps> = props => {
  const [ts] = useAnimationFrame()
  const [ref, offset] = useMeasure()
  const zeroToNArray = [...Array(props.numPlanes)].map((_, i) => i)
  const randomSeeds = React.useMemo(
    () =>
      zeroToNArray.map(_ => ({
        x: getRandomFloat(-1, 1),
        y: getRandomFloat(-1, 1),
        a: getRandomFloat(-5, 5),
        b: getRandomFloat(-5, 5),
        c: getRandomFloat(-5, 5),
      })),
    [],
  )

  const attrsNArray = zeroToNArray.map(i => {
    const seed = randomSeeds[i]
    // dx/dy is change from center point
    const dx = Math.round(
      PLANE_VARIANCE_X * seed.x +
        getPlaneX2(ts, 1 / 1000, seed.a, seed.b, seed.c),
    )
    const dy = Math.round(PLANE_VARIANCE_Y * seed.y)
    const rotation = Math.round(
      getPlaneX2(ts, 1 / 1000, seed.a, seed.b, seed.c),
    )
    return [dx, dy, rotation]
  })

  return (
    <Grid>
      <Gradient ref={ref}>
        {zeroToNArray.map(i => {
          const [dx, dy, rotation] = attrsNArray[i]

          return (
            <Translation
              width={20}
              height={20}
              x={dx}
              y={dy}
              rotation={rotation}
            >
              <Plane color={colors.blue[0]} />
            </Translation>
          )
        })}
        <svg width={offset.width} height={offset.height}>
          <g
            transform={`matrix(1 0 0 -1 ${Math.round(
              offset.width / 2,
            )} ${Math.round(offset.height / 2)})`}
          >
            {zeroToNArray.map(i => {
              const [dx, dy, rotation] = attrsNArray[i]
              const cx = Math.round(dx + -rotation * 1.5)
              const cy = -Math.round((offset.height / 2 - dy) / 2)

              return (
                <path
                  d={`
                    M ${dx} ${dy * -1}
                    C ${cx} ${cy}, ${cx} ${cy}, ${dx} -${offset.height / 2}
                  `.trim()}
                  stroke="white"
                  fill="transparent"
                  stroke-dasharray="4"
                />
              )
            })}
          </g>
        </svg>
      </Gradient>
    </Grid>
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

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${colors.blue[7]} 15%,
    rgba(0, 0, 0, 0) 100%
  );

  & path {
    animation: ${dashAnimation} 1s linear infinite;
  }
`

const Grid = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("${connectionsUrl}");
  animation: ${translateUp} ${10000 / 20}s linear infinite;
`
