import React from 'react'
import { Box } from 'reflexbox'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ContainerSmall } from './Container'
import floralUrl from '../img/reef_made.png'
import backgroundUrl from '../img/green_splatter.png'
import { fontFamily, fontSizes, space, colors } from '../theme'
import {
  DetailsList,
  DetailsRow,
  DetailsRowDt,
  DetailsRowDd,
} from './DetailsList'
import { ColoredBlade } from './ColoredBlade'
import { PlaneAnimation } from './PlaneAnimation'
import { Footer } from './Footer'

export const HomePage: React.FC = () => (
  <DefaultLayout>
    {/* Todo make this responsive */}
    <ContainerSmall>
      <div style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '60%', margin: '0 auto' }}>
          <img src={floralUrl} />
        </div>
        <h2
          style={{
            fontFamily: fontFamily.script,
            fontSize: fontSizes[7] + 'em',
          }}
        >
          J &amp; V
        </h2>
      </div>
      <div style={{ textAlign: 'center', marginTop: space[3] + 'em' }}>
        <h1
          style={{
            fontFamily: fontFamily.serif,
            fontSize: fontSizes[6] + 'em',
            color: colors.gray[6],
          }}
        >
          Getting Married
        </h1>
      </div>
    </ContainerSmall>
    <Box mt={space[7] + 'em'} mb={space[7] + 'em'}>
      <ColoredBlade base="blue" index={4}>
        <div style={{ zIndex: 2, position: 'relative' }}>
          <Box p={space[2] + 'em'} textAlign="center">
            <h2>What to know</h2>
          </Box>
        </div>
        {/* <Box height={space[7] * 2 + 'em'}>
          <PlaneAnimation numPlanes={8} />
        </Box> */}
      </ColoredBlade>
    </Box>
    <ContainerSmall>
      <div style={{ fontFamily: fontFamily.sansserif }}>
        <p>
          John and Victoria are getting married. This is not the official
          invitation, but here are some things you should know:
        </p>
        <ul>
          <li></li>
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
  </DefaultLayout>
)
