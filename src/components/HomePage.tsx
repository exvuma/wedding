import React, { useState } from 'react'
import { Box } from 'reflexbox'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ContainerSmall, Container } from './Container'
import { fontFamily, space, colors } from '../theme'
import { ColoredBlade } from './ColoredBlade'
import { FormSection } from './FormSection'
import { Hero } from './Hero'
import { Footer } from './Footer'
import { PartyProfileSection, Profile } from './PartyProfileSection'
import { objectKeys } from '../utils/Object'
import { profiles } from '../profiles'
import { PartyProfileCards } from './PartyProfileCards'
import { PartyProfileCards2 } from './PartyProfileCard2'
import { Flipper } from 'react-flip-toolkit'
import { PartyProfileDetail } from './PartyProfileDetail'
import hyattPhotoUrl from '../img/Hyatt-Ziva-Exterior-Cancun-1500.jpg'

export const HomePage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState(null as Profile | null)
  const flipKey = selectedProfile ? selectedProfile.name : null

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
        <ContainerSmall>
          <Hero />
        </ContainerSmall>
        <Box marginTop={space[4] + 'em'}>
          <ColoredBlade base="gray" index={7}>
            <div
              style={{
                background: `url(${hyattPhotoUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '36vw',
                padding: '2em 0',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
              }}
            >
              <h2
                style={{
                  fontSize: '3em',
                  textShadow: '0 2px 3px rgba(0, 0, 0, 0.6)',
                  margin: 0,
                }}
              >
                What to expect
              </h2>
            </div>
          </ColoredBlade>
        </Box>
        <ContainerSmall>
          <div>
            <p>
              John and Victoria are getting married. This is not the official
              invitation, but here are some things you should know:
            </p>
            <ul>
              <li>You need a passport</li>
              <li>
                Plan to stay at least 3 nights in the window November 18th -
                22nd
              </li>
              <li>
                <strong>Do not</strong> book a hotel, Airbnb, or any other
                lodging just yet
                <ul>
                  <li>We will send you information regarding the room block</li>
                  <li>You may buy flights now</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <DetailsList>
            <DetailsRow>
              <DetailsRowDt>Do</DetailsRowDt>
              <DetailsRowDd>Get Passport</DetailsRowDd>
            </DetailsRow>
            <DetailsRow>
              <DetailsRowDt>Do</DetailsRowDt>
              <DetailsRowDd>
                Plan to stay 3 all-inclusive nights at the Hyatt Ziva on the
                discounted room block
              </DetailsRowDd>
            </DetailsRow>
            <DetailsRow>
              <DetailsRowDt>Do</DetailsRowDt>
              <DetailsRowDd>
                Book flights in window 11/18/20 - 11/22/20
              </DetailsRowDd>
            </DetailsRow>
            <DetailsRow>
              <DetailsRowDt>Do</DetailsRowDt>
              <DetailsRowDd>Add your plus ones/many</DetailsRowDd>
            </DetailsRow>
            <DetailsRow>
              <DetailsRowDt>Do</DetailsRowDt>
              <DetailsRowDd>
                Fill out <a href="https://forms.gle/KmU48BDegew7tm3E8">form</a>.
              </DetailsRowDd>
            </DetailsRow>
            <DetailsRow>
              <DetailsRowDt>Don't</DetailsRowDt>
              <DetailsRowDd>
                Very important! Do NOT book hotel, Airbnb, or lodging
              </DetailsRowDd>
            </DetailsRow>
            <DetailsRow>
              <DetailsRowDt>Don't</DetailsRowDt>
              <DetailsRowDd>
                Send any wedding gifts. Your presence is our most important present
              </DetailsRowDd>
            </DetailsRow>
          </DetailsList> */}
        </ContainerSmall>
        {/* <Box mt={space[7] + 'em'} mb={space[7] + 'em'}>
          <ColoredBlade
            base="red"
            index={6}
            customBg={`url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23000000' fill-opacity='0.13' fill-rule='evenodd'/%3E%3C/svg%3E");`}
          >
            <div style={{ zIndex: 2, position: 'relative' }}>
              <Box p={space[4] + 'em'} textAlign="center">
                <h2 style={{ fontSize: '3em' }}>We'd like to hear from you</h2>
              </Box>
            </div>
          </ColoredBlade>
        </Box> */}
        <ContainerSmall>
          <FormSection />
        </ContainerSmall>
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
          {/* <Box marginTop={space[5] + 'em'}>
            <Container>
              <PartyProfileCards
                onSelect={profile => setSelectedProfile(profile)}
              />
            </Container>
          </Box> */}
          <Box marginTop={space[5] + 'em'}>
            <Container>
              <PartyProfileCards2
                onSelect={profile => setSelectedProfile(profile)}
                selectedProfile={selectedProfile?.name}
              />
            </Container>
          </Box>
        </Box>
        {/* ((n = 0) =>
          ([0, 1, 2, 3, 4, 5, 6, 7] as const).map(i =>
            objectKeys(colors).map(color => (
              <PartyProfileSection
                color={color}
                index={i}
                direction={n++ % 2 === 0 ? 'right' : 'left'}
                profile={profiles[0]}
              />
            )),
          ))() */}
        {/* <Footer /> */}
      </DefaultLayout>
    </Flipper>
  )
}
