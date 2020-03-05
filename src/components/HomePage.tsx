import React, { useState } from 'react'
import { Box } from 'reflexbox'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ContainerSmall, Container } from './Container'
import { fontFamily, space } from '../theme'
import { ColoredBlade } from './ColoredBlade'
import { FormSection } from './FormSection'
import { Hero } from './Hero'
import { Waypoint } from 'react-waypoint'
import { Profile } from './PartyProfileSection'
import { PartyProfileCards } from './PartyProfileCards'
import { PartyProfileCards2 } from './PartyProfileCard2'
import { Book } from './sections/Book'
import { Flipper } from 'react-flip-toolkit'
import { PartyProfileDetail } from './PartyProfileDetail'
import { StickyContainer, Sticky } from 'react-sticky'
import { Navbar } from './Navbar'

type tabId = 'home' | 'book' | 'faqs' | 'party'
export const HomePage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState(null as Profile | null)
  const [activeTab, setActiveTab] = useState<tabId>('home')

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
          <Waypoint
            debug={true}
            onEnter={({}) => {
              setActiveTab('home')
            }}
          >
            <div>
              <ContainerSmall>
                <Hero />
              </ContainerSmall>
              <Box mt={space[7] + 'em'} mb={space[4] + 'em'}>
                <ColoredBlade base="red" index={6}>
                  <div style={{ zIndex: 2 }}>
                    {/* <div style={{ zIndex: 2, position: 'relative' }}> */}
                    <Box p={space[4] + 'em'} textAlign="center">
                      <h2 style={{ fontSize: '3em' }}>What to expect</h2>
                    </Box>
                  </div>
                  {/* <Box height={space[7] * 2 + 'em'}>
              <PlaneAnimation numPlanes={8} />
            </Box> */}
                </ColoredBlade>
              </Box>
            </div>
          </Waypoint>
          <Waypoint
            debug={true}
            onEnter={({}) => {
              setActiveTab('book')
            }}
          >
            <div>
              <Book />
            </div>
          </Waypoint>
          <ContainerSmall>
            <FormSection />
          </ContainerSmall>
          <Waypoint
            onEnter={({}) => {
              setActiveTab('party')
            }}
            onLeave={({}) => {
              setActiveTab('home')
            }}
          >
            <div>
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
            </div>
          </Waypoint>
        </DefaultLayout>
      </Flipper>
    </StickyContainer>
  )
}
