import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from 'reflexbox'
import { ContainerSmall, Container } from '../Container'
import { ColoredBlade } from '../ColoredBlade'
import { space, colors } from '../../theme'
import backgroundUrl from '../../img/about_us/IMG_20200203_123018.jpg'
import photo1Url from '../../img/about_us/IMG_20191017_183439.jpg'
import { SmallHr } from '../Hr'

export const About: React.FC = () => (
  <Box marginBottom={space[5] + 'em'}>
    <ColoredBlade base="aqua" index={4}>
      <Background>
        <ContainerSmall>
          <Box
            height={['22em', '35em']}
            paddingY={space[3] + 'em'}
            textAlign="center"
          ></Box>
        </ContainerSmall>
      </Background>
    </ColoredBlade>
    <Container>
      <Flex
        flexWrap="wrap"
        ml={[0, -space[4] + 'em']}
        mr={[0, -space[4] + 'em']}
      >
        <Box p={space[4] + 'em'} width={[1, 1 / 2]}>
          <JohnStory />
        </Box>
        <Box
          p={space[4] + 'em'}
          width={[1, 1 / 2]}
          display="flex"
          flexDirection="column"
        >
          <div style={{ position: 'sticky', top: '4em' }}>
            <PhotoBorder>
              <img src={photo1Url} />
            </PhotoBorder>
          </div>
        </Box>
      </Flex>
    </Container>
  </Box>
)

const Background = styled.div`
  background: url(${backgroundUrl});
  background-size: cover;
  background-position-y: 35%;
`

const PhotoBorder = styled.div`
  position: relative;
  padding: ${space[3]}em;
  & img {
    position: relative;
    z-index: 2;
  }
  &:before {
    content: '';
    width: 100%;
    height: 5em;
    background: ${colors.aqua[1]};
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`

const JohnStory: React.FC<> = () => (
  <>
    <h2>Can you believe it?</h2>
    <SmallHr color={colors.red[2]} />
    <h3>
      <em>A foreward from John</em>
    </h3>
    <p>I proposed to Victoria and she said yes.</p>
    <p>
      No, it didn't happen at the capitol. It was simple; Just me, Graham,
      Cersei, a bottle of wine and my beautiful future wife coming home late at
      night from a trip to California.
    </p>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <SmallHr color={colors.rose[2]} />
    </div>
    <p>
      I had been stressing about just <em>what I was going to do</em> pop the
      question. I had certainly gone through a lot ideas. At first, I was sure
      that I was going to write a song. It'd be just like any other day. I'd be
      playing a song and hopefully Victoria would recognize it was new and start
      listening.
    </p>
    <p>
      I realized as I was writing the chorus, that it was going to be a awkward
      to deliver the hook, <em>"will you marry me?"</em> Does the song just end?
      Do I put the guitar down and get down on one knee? What if she didn't hear
      it? What if I messed it up? Logistically, this idea just wasn't going to
      work.
    </p>
    <p>
      My other bright idea was to do it on top of a snowy mountain in New
      Zealand just before raced to the bottom. But what if I drop it in the
      snow? What if it doesn't fit and falls off as she's boarding down the
      mountain? At any rate, the ring didn't arrive on time anyway.
    </p>
    <h2></h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
  </>
)
