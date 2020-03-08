import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import floralUrl from '../img/reef_made.png'
import { ContainerSmall } from './Container'

export const Hero: React.FC = () => {
  return (
    <ContainerSmall>
      <div style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '60%', paddingTop: '2em', margin: '0 auto' }}>
          <img src={floralUrl} />
        </div>
        <h2
          style={{
            fontFamily: fontFamily.serif,
            fontSize: fontSizes[3] + 'em',
            marginTop: space[3] + 'em',
            marginBottom: -space[1] + 'em',
            color: colors.gray[6],
          }}
        >
          John Fawcett &amp; Victoria Bernard
        </h2>
      </div>
      <div style={{ textAlign: 'center', marginTop: space[3] + 'em' }}>
        <h1
          style={{
            fontFamily: fontFamily.serif,
            fontSize: fontSizes[6] + 'em',
            color: colors.gray[7],
          }}
        >
          Getting Married
        </h1>
        <SubHeading>November 20th, 2020 - Cancún, Mexico</SubHeading>
      </div>
    </ContainerSmall>
  )
}

const SubHeading = styled.h2`
  font-family: ${fontFamily.sansserif};
  font-size: 0.8em;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  margin-top: -${space[2]}em;
`
