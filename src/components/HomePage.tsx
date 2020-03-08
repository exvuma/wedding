import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ContainerSmall, Container } from './Container'
import { fontFamily, space } from '../theme'
import { ColoredBlade } from './ColoredBlade'
import { Hero } from './Hero'
import { Waypoint } from 'react-waypoint'
import { Profile } from './PartyProfileSection'
import { PartyProfileCards } from './PartyProfileCards'
import { PartyProfileCards2 } from './PartyProfileCard2'
import { Book } from './sections/Book'
import { Flipper } from 'react-flip-toolkit'
import { PartyProfileDetail } from './PartyProfileDetail'
import { StickyContainer, Sticky } from 'react-sticky'
import { Navbar, TabId } from './Navbar'
import { Faq } from './sections/Faq'
import { PlaneAnimation } from './PlaneAnimation'
import { About } from './sections/About'
import { Panel } from './sections/Panel'
import lamePic from '../img/about_us/IMG_20190811_130244.jpg'
import lamePic2 from '../img/about_us/20170527_193518.jpg'

export const HomePage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState(null as Profile | null)
  const [activeTab, setActiveTab] = useState<TabId>('home')

  const flipKey = selectedProfile ? `flip-${selectedProfile.name}` : null
  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <header style={style}>
            <Navbar activeTab={activeTab} />
          </header>
        )}
      </Sticky>
      <Flipper flipKey={flipKey} decisionData={flipKey}>
        <DefaultLayout>
          {selectedProfile && flipKey && (
            <PartyProfileDetail
              profile={selectedProfile}
              parentId={flipKey}
              onClose={() => setSelectedProfile(null)}
            />
          )}
          {/* Todo make this responsive */}
          <Panel id="home" setActiveTab={setActiveTab}>
            <Hero />
          </Panel>
          <Panel id="about" setActiveTab={setActiveTab}>
            <Box mt={space[7] + 'em'} mb={space[4] + 'em'}>
              <ColoredBlade base="red" index={6}>
                <div style={{ zIndex: 2 }}>
                  <Box p={space[4] + 'em'} textAlign="center">
                    <h2 style={{ fontSize: '3em' }}>About Us</h2>
                  </Box>
                </div>
              </ColoredBlade>
            </Box>
            <ContainerSmall>
              <img src={lamePic} />
              <img src={lamePic2} />
              <About />
            </ContainerSmall>
          </Panel>
          <Panel id="book" setActiveTab={setActiveTab}>
            <ColoredBlade base="blue" index={6}>
              <Flex>
                {/* <Flex pt={space[7] + 'em'} pb={space[4] + 'em'}> */}
                <Box style={{ position: 'relative' }} flex={1}>
                  <PlaneAnimation numPlanes={4} centerWidth={50} />
                </Box>
                <Box
                  flex={1}
                  style={{ position: 'relative', textAlign: 'center' }}
                >
                  <PlaneAnimation numPlanes={0} centerWidth={50} />
                  <h2
                    style={{
                      fontSize: '3em',
                      marginTop: space[3] + 'em',
                      marginBottom: space[1] + 'em',
                    }}
                  >
                    Book
                  </h2>
                </Box>
                <Box style={{ position: 'relative' }} flex={1}>
                  blah
                  <PlaneAnimation numPlanes={4} centerWidth={50} />
                </Box>
              </Flex>
            </ColoredBlade>
            <ColoredBlade base="red" index={6}>
              <Box p={space[4] + 'em'} textAlign="center">
                <h2 style={{ fontSize: '3em' }}>
                  Do NOT Book Off the Room Block!
                </h2>
              </Box>
            </ColoredBlade>
            <Book />
          </Panel>
          <Panel id="faqs" setActiveTab={setActiveTab}>
            <ColoredBlade base="red" index={6}>
              <Box p={space[4] + 'em'} textAlign="center">
                <h2 style={{ fontSize: '3em' }}>FAQs</h2>
              </Box>
            </ColoredBlade>
            <ContainerSmall>
              <Faq />
            </ContainerSmall>
          </Panel>
          <Panel id="party" setActiveTab={setActiveTab}>
            <Box marginY={space[3] + 'em'}>
              <ColoredBlade base="red" index={0}>
                <Box
                  paddingY={space[3] + 'em'}
                  textAlign="center"
                  fontFamily={fontFamily.sansserif}
                >
                  <h2 style={{ fontSize: '3em' }}>Meet the wedding party</h2>
                </Box>
              </ColoredBlade>
              <Box marginTop={space[5] + 'em'}>
                <Container>
                  <PartyProfileCards
                    onSelect={profile => setSelectedProfile(profile)}
                  />
                </Container>
              </Box>
              <Box marginTop={space[5] + 'em'}>
                <Container>
                  <PartyProfileCards2
                    onSelect={profile => setSelectedProfile(profile)}
                  />
                </Container>
              </Box>
            </Box>
          </Panel>
        </DefaultLayout>
      </Flipper>
    </StickyContainer>
  )
}
