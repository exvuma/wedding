import styled from '@emotion/styled'
import * as React from 'react'
import { Box } from 'reflexbox'
import backgroundUrl from '../../img/venue-1.jpg'
import { fontFamily, breakpoints } from '../../theme'

export const Outro: React.FC = () => (
  <Box mt={5}>
    <Background>
      <OutroContainer>
        <OutroHeader>See y'all there!</OutroHeader>
      </OutroContainer>
    </Background>
  </Box>
)

const Background = styled.div`
  background: url(${backgroundUrl});
  background-size: cover;
  background-position-y: 35%;
  /* box-shadow: inset 0 5px 15px rgba(0, 0, 0, 0.3); */
`

const OutroContainer = styled.div`
  height: 28em;
  position: relative;
`

const OutroHeader = styled.h2`
  position: absolute;
  right: 1em;
  bottom: 1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-family: ${fontFamily.script};
  color: white;

  @media screen and (max-width: ${breakpoints.mobile}em) {
    background: rgba(0, 0, 0, 0.3);
    padding: 1em;
    width: 100%;
    text-align: center;
    right: 0;
  }
`
