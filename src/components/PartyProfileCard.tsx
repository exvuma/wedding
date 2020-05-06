import React from 'react'
import { Flipped } from 'react-flip-toolkit'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { Box } from 'reflexbox'
import { SelectableProfile } from './PartyProfileCard2'
import { CardWrapper } from './utils/CardWrapper'
import { CardTitle } from './utils/CardTitle'
import { profiles } from '../profiles'

export type Profile = typeof profiles[number]

type PartyProfileCardProps = SelectableProfile & {
  profile: Profile
}

export const PartyProfileCard: React.FC<PartyProfileCardProps> = props => {
  return (
    <Flipped flipId={`${props.profile.name}-profileBackground`}>
      <CardWrapper onClick={() => props.onSelect(props.profile)}>
        <Box paddingY={space[2] + 'em'}>
          <CardPhotoFrame offset={props.profile.imgOffset}>
            <Flipped flipId={`${props.profile.name}-profileImg`}>
              <img src={props.profile.photoUrl} />
            </Flipped>
          </CardPhotoFrame>
        </Box>
        <Box>
          <CardName>{props.profile.name}</CardName>
          <CardTitle>{props.profile.role}</CardTitle>
        </Box>
      </CardWrapper>
    </Flipped>
  )
}

const CardPhotoFrame = styled<'div', { offset: readonly [number, number] }>(
  'div',
)`
  position: relative;
  display: inline-block;
  width: 8em;
  height: 8em;
  margin: 0 auto;
  padding: ${space[2]}em;
  border-radius: 100%;
  border: solid 15px ${colors.gray[1]};
  overflow: hidden;
  background: white;

  & > img {
    position: absolute;
    top: ${props => props.offset[1]}%;
    left: ${props => props.offset[0]}%;
    width: 100%;
    max-width: 100%;
  }
`

const CardName = styled.h2`
  font-family: ${fontFamily.serif};
  margin: 0;
`
