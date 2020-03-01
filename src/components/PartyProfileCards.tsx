import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { Box, Flex } from 'reflexbox'
import { ColoredBlade } from './ColoredBlade'
import { Container } from './Container'
import { Grid, GridItem } from './Grid'
import { profiles } from '../profiles'
import { PartyProfileCard } from './PartyProfileCard'

export const PartyProfileCards: React.FC = () => (
  <Grid columns={3}>
    {profiles.map((profile, i) => (
      <GridItem key={profile.name + i}>
        <PartyProfileCard profile={profile} imgOffsset={[0, 0]} />
      </GridItem>
    ))}
  </Grid>
)
