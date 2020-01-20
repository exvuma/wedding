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
      <div
        style={{ textAlign: 'center', marginTop: - space[7] + 'em' }}
      >
        <div style={{ maxWidth: '80%' }}>
          <img src={floralUrl} />
        </div>
        <h2
          style={{
            fontFamily: fontFamily.script,
            fontSize: fontSizes[7] + 'em',
          }}
        >
          J + V
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
          Getting Hitched
        </h1>
      </div>
    </ContainerSmall>
    <Box mt={space[7] + space[7] + 'em'} mb={space[4] + 'em'}>
      <ColoredBlade base="blue" index={7}>
        <div style={{ zIndex: 2, position: 'relative' }}>
          <Box p={space[7] + 'em'} textAlign="center">
            <h2>We know y'all are coming from all over</h2>
          </Box>
        </div>
        <Box height={space[7] * 3 + 'em'}>
          <PlaneAnimation numPlanes={8} />
        </Box>
      </ColoredBlade>
    </Box>
    <div style={{
      backgroundImage: `url(${backgroundUrl})`,
    }}>
      <ContainerSmall>
        <h2
          style={{
            fontFamily: fontFamily.script,
            fontSize: fontSizes[7] + 'em',
          }}
        >
          The Know
          </h2>
        <hr
          style={{
            border: 'none',
            height: '1px',
            background: colors.gray[3],
          }}
        />
        <DetailsList>
          <DetailsRow>
            <DetailsRowDt>Do</DetailsRowDt>
            <DetailsRowDd>Get Passport</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>Do</DetailsRowDt>
            <DetailsRowDd>Plan to stay 3 all-inclusive nights at the Hyatt Ziva on the discounted room block</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>Do</DetailsRowDt>
            <DetailsRowDd>Book flights in window 11/18/20 - 11/22/20</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>Do</DetailsRowDt>
            <DetailsRowDd>Add your plus ones/many</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>Do</DetailsRowDt>
            <DetailsRowDd>Fill out <a href="https://forms.gle/KmU48BDegew7tm3E8">form</a>.</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>Don't</DetailsRowDt>
            <DetailsRowDd>Very important! Do NOT book hotel, Airbnb, or lodging</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>Don't</DetailsRowDt>
            <DetailsRowDd>Send any wedding gifts. Your presence is our most important present</DetailsRowDd>
          </DetailsRow>
        </DetailsList>
      </ContainerSmall>
    </div>
    <Footer />

  </DefaultLayout >
)
