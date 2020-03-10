import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { Box } from 'reflexbox'
import { SelectableProfile } from './PartyProfileCard2'
import { CardWrapper } from './utils/CardWrapper'
import { CardTitle } from './utils/CardTitle'

export type Profile = {
  name: string
  bio: React.ReactElement
  photoUrl: string
}

type PartyProfileCardProps = SelectableProfile & {
  profile: Profile
  imgOffsset: [number, number]
}

export const PartyProfileCard: React.FC<PartyProfileCardProps> = props => {
  return (
    <CardWrapper onClick={() => props.onSelect(props.profile)}>
      <Box paddingY={space[2] + 'em'}>
        <CardPhotoFrame offset={props.imgOffsset}>
          <img src={props.profile.photoUrl} />
        </CardPhotoFrame>
      </Box>
      <Box>
        <CardName>{props.profile.name}</CardName>
        <CardTitle>Groomsman</CardTitle>
      </Box>
    </CardWrapper>
  )
}

const CardPhotoFrame = styled<'div', { offset: [number, number] }>('div')`
  position: relative;
  display: inline-block;
  width: 8em;
  height: 8em;
  margin: 0 auto;
  padding: ${space[2]}em;
  border-radius: 100%;
  border: solid 15px ${colors.gray[1]};
  overflow: hidden;

  & > img {
    position: absolute;
    top: ${props => props.offset[0]}%;
    left: ${props => props.offset[1]}%;
    width: 100%;
    max-width: 100%;
  }
`

const CardName = styled.h2`
  font-family: ${fontFamily.serif};
  margin: 0;
`
