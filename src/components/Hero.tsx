import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { ContainerSmall } from './utils/Container'
import floralUrl from '../img/Reef_made.png'

export const Hero: React.FC = () => {
  return (
    <ContainerSmall>
      <div
        style={{
          height: 'calc(max(100vh, 30em))',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{ maxWidth: '60%', paddingTop: '2em', margin: '0 auto' }}
            >
              <img src={floralUrl} />
            </div>
            <h2
              style={{
                fontFamily: fontFamily.sansserif,
                fontSize: fontSizes[3] + 'em',
                marginTop: space[3] + 'em',
                marginBottom: -space[1] + 'em',
                color: colors.gray[4],
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
                color: colors.purple[6],
              }}
            >
              Getting Married
            </h1>
            <SubHeading>November 20th, 2020 - Cancún, Mexico</SubHeading>
            <CantMakeIt>
              Can't make it?{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScNTtPxdosf-pkdo7VparHbKWMCrom15jqQuSVYPTeozbTP2g/viewform?usp=sf_link">
                Let us know
              </a>
              .
            </CantMakeIt>
          </div>
        </div>
      </div>
    </ContainerSmall>
  )
}

export const SubHeading = styled.h2`
  font-family: ${fontFamily.sansserif};
  font-size: 0.8em;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  /* margin-top: -${space[2]}em; */
  color: ${colors.gray[6]};
`

const CantMakeIt = styled.p`
  font-size: 0.8em;
  color: ${colors.gray[4]};
  margin-top: 2em;
`
