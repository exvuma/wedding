import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { Box, Flex } from 'reflexbox'
import { ColoredBlade } from './ColoredBlade'
import { Container } from './Container'

export type Profile = {
  name: string
  bio: React.ReactElement
  photoUrl: string
}

type PartyProfileSectionProps = {
  profile: Profile
  color: keyof typeof colors
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  direction: 'left' | 'right'
}

export const PartyProfileSection: React.FC<PartyProfileSectionProps> = props => {
  return (
    <Box marginY={space[3] + 'em'}>
      <ColoredBlade
        base={props.color}
        index={props.index}
        // customBg={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000001' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");`}
        customBg={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%23000001' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E");`}
      >
        <div
          style={{
            boxShadow: 'inset 0 2px 3px rgba(0, 0, 0, 0.1)',
            borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Container>
            <Box paddingTop={space[4] + 'em'} textAlign={props.direction}>
              <Flex
                flexWrap="wrap"
                ml={[0, -3]}
                mr={[0, -3]}
                flexDirection={
                  props.direction === 'left' ? 'row-reverse' : 'row'
                }
              >
                <Box display="flex" p={3} width={[1, 1 / 3]}></Box>
                <Box display="flex" p={3} width={[1, 2 / 3]}>
                  <h2
                    style={{
                      fontFamily: fontFamily.sansserif,
                      textTransform: 'uppercase',
                      letterSpacing: '10px',
                      fontSize: '1.8em',
                      fontWeight: 600,
                    }}
                  >
                    {props.profile.name}
                  </h2>
                </Box>
              </Flex>
            </Box>
          </Container>
        </div>
      </ColoredBlade>
      <Box>
        <Container>
          <Flex
            flexWrap="wrap"
            ml={[0, -3]}
            mr={[0, -3]}
            flexDirection={props.direction === 'left' ? 'row-reverse' : 'row'}
          >
            <Box display="flex" p={3} width={[1, 1 / 3]}>
              <div>
                <PhotoWrapper direction={props.direction}>
                  <img src={props.profile.photoUrl} />
                </PhotoWrapper>
              </div>
            </Box>
            <Box display="flex" p={3} width={[1, 2 / 3]}>
              {props.profile.bio}
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

// transform: perspective(2910px) translate(-2em, 4em) rotateY(12deg) rotateX(3deg) rotate(-2deg);
// transform: scale(0.95) translateX(0) translateY(25px) perspective(3190px) rotateY(-5deg) rotateX(1deg) rotate(0)
const PhotoWrapper = styled<
  'div',
  {
    direction: 'left' | 'right'
  }
>('div')(props => ({
  marginTop: `-16.5em`,
  padding: `${space[2]}em`,
  background: 'white',
  borderRadius: `${space[1]}em`,
  transform:
    props.direction === 'left'
      ? [
          'scale(0.95)',
          'translateX(0px)',
          'translateY(50px)',
          'perspective(3190px)',
          'rotateY(-29deg)',
          'rotateX(4deg)',
          'rotate(1deg)',
        ].join(' ')
      : [
          'perspective(2910px)',
          'translate(-2em, 4em)',
          'rotateY(12deg)',
          'rotateX(3deg)',
          'rotate(-2deg)',
        ].join(' '),
  boxShadow:
    props.direction === 'left'
      ? [
          '0 30px 60px -12px rgba(50,50,93,.25)',
          '0 18px 36px -18px rgba(0,0,0,.3)',
          '0 -12px 36px -8px rgba(0,0,0,.025)',
        ].join(', ')
      : [
          '0 30px 60px -12px rgba(50,50,93,.25)',
          '0 18px 36px -18px rgba(0,0,0,.3)',
          '0 -12px 36px -8px rgba(0,0,0,.025)',
        ].join(', '),
}))
