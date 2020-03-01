import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { Box, Flex } from 'reflexbox'
import { ColoredBlade } from './ColoredBlade'
import { Container } from './Container'
import { SelectableProfile } from './PartyProfileCard2'

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

const CardTitle = styled.h3`
  font-family: ${fontFamily.sansserif};
  font-size: 0.8em;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: ${colors.gray[4]};
  font-size: ${fontSizes[2]}em;
  margin: ${space[1]}em 0 0 0;
  transition: all 0.3s linear;
`

const CardWrapper = styled.div`
  background: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000001' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border-radius: 3px;
  padding: ${space[2]}em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: ${fontFamily.sansserif};
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s ease-out;
  border-top: solid 8px ${colors.red[5]};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    & ${CardTitle} {
      color: ${colors.red[4]};
    }
  }
`

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
