import React from 'react'
import styled from '@emotion/styled'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { Box, Flex } from 'reflexbox'
import { ContainerSmall, Container } from '../utils/Container'
import { ColoredBlade } from '../ColoredBlade'
import { space, colors } from '../../theme'
import backgroundUrl from '../../img/about_us/IMG_20200203_123018.jpg'
import photoRingUrl from '../../img/about_us/IMG_20191017_183439.jpg'
import photoNewZealandUrl from '../../img/about_us/IMG_20190811_130244.jpg'
import photoBeachurl from '../../img/about_us/IMG_20200202_141428.jpg'
import { SmallHr } from '../Hr'
import { Waypoint } from 'react-waypoint'

const sectionPhotos = [
  { id: 'intro', src: photoRingUrl },
  { id: 'new-zealand', src: photoNewZealandUrl },
  { id: 'outro', src: photoBeachurl },
] as const

type AboutSection = typeof sectionPhotos[number]['id']

// const sectionPhotos = (<T extends string>(): Array<SectionPhoto<T>> => [
//   { id: 'intro', src: photo1Url },
//   { id: 'new-zealand', src: photo1Url },
//   { id: 'outro', src: photo1Url },
// ])()

export const About: React.FC = () => {
  const [currentSection, setCurrentSection] = React.useState<AboutSection>(
    sectionPhotos[0].id,
  )

  const activeSectionPhoto =
    sectionPhotos.find(p => p.id === currentSection) || sectionPhotos[0]

  return (
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
            <JohnStory onSectionEnter={section => setCurrentSection(section)} />
          </Box>
          <Box
            p={space[4] + 'em'}
            width={[1, 1 / 2]}
            display="flex"
            flexDirection="column"
          >
            <div style={{ position: 'sticky', top: '4em' }}>
              <Flipper flipKey={activeSectionPhoto}>
                <PhotoFrame>
                  <Flipped flipId={activeSectionPhoto.id}>
                    <Photo src={activeSectionPhoto.src} />
                  </Flipped>
                  {/* <PhotoBorder /> */}
                </PhotoFrame>
              </Flipper>
            </div>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

const Background = styled.div`
  background: url(${backgroundUrl});
  background-size: cover;
  background-position-y: 35%;
`

const PhotoFrame = styled.div`
  position: relative;
  padding: ${space[3]}em;
  text-align: center;
  /* background: ${colors.purple[1]}; */
`

// const PhotoBorder = styled.div`
//   width: 100%;
//   height: 5em;
//   background: ${colors.red[0]};
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   z-index: 1;
// `

const Photo = styled.img`
  position: relative;
  z-index: 2;
  max-height: calc(100vh - 8em /* height of navbar + some other offset */);
  box-shadow: 10px 9px 0 #eee;
  border: solid 8px ${colors.gray[4]};
`

const JohnStory: React.FC<{
  onSectionEnter: (secion: AboutSection) => void
}> = props => (
  <>
    <Waypoint
      bottomOffset="80%"
      onEnter={() => props.onSectionEnter('intro')}
    />
    <h2>Can you believe it?</h2>
    <SmallHr color={colors.rose[3]} />
    <h3>A foreward from John</h3>
    <p>I proposed to Victoria and she said yes.</p>
    <p>
      No, it didn't happen at the capitol. It was simple; Just me, Graham,
      Cersei, a bottle of wine, and my beautiful future wife coming home late at
      night from a trip to California.
    </p>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <SmallHr color={colors.gray[3]} />
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
    <Waypoint
      bottomOffset="80%"
      onEnter={() => props.onSectionEnter('new-zealand')}
    />
    <p>
      My other bright idea was to do it on top of a snowy mountain in New
      Zealand just before we raced to the bottom. But what if I drop the ring in
      the snow? What if it doesn't fit and falls off as she's boarding down the
      mountain? At any rate, the ring didn't arrive on time anyway.
    </p>
    <h2>How did we get here?</h2>
    <SmallHr color={colors.gray[3]} />
    <p>Victoria and I met at Cloudflare.</p>
    <p>To be continued..</p>
    <Waypoint
      bottomOffset="80%"
      onEnter={() => props.onSectionEnter('outro')}
    />
  </>
)
