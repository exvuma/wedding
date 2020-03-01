import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { Box, Flex } from 'reflexbox'
import { Grid, GridItem } from './Grid'
import { profiles } from '../profiles'

export type SelectableProfile = { onSelect: (profile: Profile) => void }

export const PartyProfileCards2: React.FC<SelectableProfile> = props => (
  <Grid columns={4} margin="0 0 12vh">
    {profiles.map((profile, i) => (
      <GridItem key={profile.name + i}>
        <PartyProfileCard2 profile={profile} onSelect={props.onSelect} />
      </GridItem>
    ))}
  </Grid>
)

export type Profile = {
  name: string
  bio: React.ReactElement
  photoUrl: string
}

type PartyProfileCard2Props = SelectableProfile & {
  profile: Profile
}

export const PartyProfileCard2: React.FC<PartyProfileCard2Props> = props => {
  return (
    <CardWrapper onClick={() => props.onSelect(props.profile)}>
      <CardBackground>
        <CardPhotoFrame>
          <img src={props.profile.photoUrl} />
        </CardPhotoFrame>
      </CardBackground>
      <Box marginTop={space[1] + 'em'}>
        <CardName>{props.profile.name}</CardName>
        <CardTitle>Groomsman</CardTitle>
      </Box>
    </CardWrapper>
  )
}

const CardTitle = styled.h3`
  font-family: ${fontFamily.sansserif};
  font-size: 0.8em;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: ${colors.gray[4]};
  font-size: 0.8em;
  margin: ${space[1]}em 0 0 0;
`

const CardPhotoFrame = styled.div`
  width: 100%;
  margin: 0 auto;
  & > img {
    /* margin-top: -100px; */
  }
`

const CardBackground = styled.div`
  flex: 1;
  background: ${colors.red[0]};
  padding: 2em;
`

const CardName = styled.h2`
  font-family: ${fontFamily.serif};
  margin: 0;
`

const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & ${CardPhotoFrame} {
    transform: scale(1);
    transition: transform 1.5s ease-out;
  }

  &:hover {
    & ${CardTitle} {
      color: ${colors.red[4]};
    }

    & ${CardPhotoFrame} {
      transform: scale(1.1);
    }
  }
`
