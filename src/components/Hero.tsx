import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import floralUrl from '../img/Reef_made.png'

export const Hero: React.FC = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '60%', margin: '0 auto' }}>
          <img src={floralUrl} />
        </div>
        <h2
          style={{
            fontFamily: fontFamily.script,
            fontSize: fontSizes[7] + 'em',
          }}
        >
          J &amp; V
        </h2>
      </div>
      <div style={{ textAlign: 'center', marginTop: space[3] + 'em' }}>
        <h1
          style={{
            fontFamily: fontFamily.serif,
            fontSize: fontSizes[6] + 'em',
            color: colors.gray[6],
          }}
        >
          Getting Married
        </h1>
        <h2>November 20th, 2020 - Cancún, Mexico</h2>
      </div>
    </div>
  )
}
