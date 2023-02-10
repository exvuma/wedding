import React, { useState } from 'react'
import { DefaultLayout } from '../layouts/DefaultLayout'
// import { Hero } from './Hero'
import { Profile } from './PartyProfileSection'
import { Flipper } from 'react-flip-toolkit'
import { Navbar, TabId } from './Navbar'
import { About } from './sections/About'
import { Panel } from './utils/Panel'

export const RescheduleUpdateHomepage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState(null as Profile | null)
  const [activeTab, setActiveTab] = useState<TabId>('home')

  const flipKey = selectedProfile ? `flip-${selectedProfile.name}` : null
  return (
    <Flipper flipKey={flipKey} decisionData={flipKey}>
      <DefaultLayout>

        {/* <Hero /> */}
        <Navbar activeTab={activeTab} />
        <Panel id="home" setActiveTab={setActiveTab}>
          <About />
        </Panel>
      </DefaultLayout>
    </Flipper>
  )
}
