import React from 'react'
import { Box } from 'reflexbox'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ContainerSmall } from './Container'
import floralUrl from '../img/A1.png'
import { fontFamily, fontSizes, space, colors } from '../theme'
import {
  DetailsList,
  DetailsRow,
  DetailsRowDt,
  DetailsRowDd,
} from './DetailsList'
import { ColoredBlade } from './ColoredBlade'
import { PlaneAnimation } from './PlaneAnimation'

export const HomePage: React.FC = () => (
  <DefaultLayout>
    <ContainerSmall>
      <div style={{ marginTop: '-2em' }}>
        <img src={floralUrl} />
      </div>
      <div
        style={{ textAlign: 'center', marginTop: -space[5] - space[8] + 'em' }}
      >
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
          Announcing
        </h1>
        <hr
          style={{
            border: 'none',
            height: '1px',
            background: colors.gray[3],
          }}
        />
        <DetailsList>
          <DetailsRow>
            <DetailsRowDt>What</DetailsRowDt>
            <DetailsRowDd>John and Victoria's wedding</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>When</DetailsRowDt>
            <DetailsRowDd>November 20th, 2020</DetailsRowDd>
          </DetailsRow>
          <DetailsRow>
            <DetailsRowDt>Where</DetailsRowDt>
            <DetailsRowDd>Cancún, Mexico</DetailsRowDd>
          </DetailsRow>
        </DetailsList>
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
    {/* <div
      style={{
        padding: space[6] + 'em',
        background: colors.blue[4],
        marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.blue[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.blue[5],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.blue[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.blue[6],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.blue[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.blue[7],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.blue[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.red[4],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.red[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.red[5],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.red[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.red[6],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.red[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.red[7],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.red[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.gold[4],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.gold[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.gold[5],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.gold[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.gold[6],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.gold[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div>
    <div
      style={{
        padding: space[6] + 'em',
        background: colors.gold[7],
        // marginTop: space[8] + 'em',
        // marginBottom: space[6] + 'em',
        color: colors.gold[0],
        textAlign: 'center',
        fontFamily: fontFamily.serif,
      }}
    >
      <h2>More details</h2>
    </div> */}
  </DefaultLayout>
)
