import React, { useState } from 'react'
import { Box, Flex } from 'reflexbox'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ContainerSmall, Container } from './Container'
import { fontFamily, space } from '../theme'
import { ColoredBlade } from './ColoredBlade'
import { Hero } from './Hero'
import { Profile } from './PartyProfileSection'
import { PartyProfileCards } from './PartyProfileCards'
import { PartyProfileCards2 } from './PartyProfileCard2'
import { Book } from './sections/Book'
import { Flipper } from 'react-flip-toolkit'
import { PartyProfileDetail } from './PartyProfileDetail'
import { Navbar, TabId } from './Navbar'
import { Faqs } from './sections/Faq'
import { About } from './sections/About'
import { Panel } from './utils/Panel'
import lamePic from '../img/about_us/IMG_20190811_130244.jpg'
import lamePic2 from '../img/about_us/20170527_193518.jpg'
import { Itinerary } from './sections/Itinerary'
import { Title, Subtitle } from './utils/Title'

export const HomePage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState(null as Profile | null)
  const [activeTab, setActiveTab] = useState<TabId>('home')

  const flipKey = selectedProfile ? `flip-${selectedProfile.name}` : null
  return (
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
        <Hero />
        <Navbar activeTab={activeTab} />
        <Panel id="home" setActiveTab={setActiveTab}>
          <About />
        </Panel>
        <Panel id="book" setActiveTab={setActiveTab}>
          <Book />
        </Panel>
        <Panel id="itinerary" setActiveTab={setActiveTab}>
          <Itinerary />
        </Panel>
        <Panel id="faqs" setActiveTab={setActiveTab}>
          <Faqs />
        </Panel>
        <Panel id="party" setActiveTab={setActiveTab}>
          <Box marginY={space[3] + 'em'}>
            <Title style={{ fontSize: '3em' }}>Wedding Party</Title>
            <Container>
              <PartyProfileCards
                onSelect={profile => setSelectedProfile(profile)}
              />
            </Container>
            {/* <Box marginTop={space[5] + 'em'}>
              <Container>
                <PartyProfileCards2
                  onSelect={profile => setSelectedProfile(profile)}
                />
              </Container>
            </Box> */}
          </Box>
        </Panel>
      </DefaultLayout>
    </Flipper>
  )
}
