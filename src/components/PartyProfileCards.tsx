import React from 'react'
import { space, breakpoints, fontSizes, fontFamily, colors } from '../theme'
import styled from '@emotion/styled'
import { Box, Flex } from 'reflexbox'
import { ColoredBlade } from './ColoredBlade'
import { Container } from './Container'
import { Grid, GridItem } from './Grid'
import { profiles } from '../profiles'
import { PartyProfileCard } from './PartyProfileCard'
import { SelectableProfile } from './PartyProfileCard2'

export const PartyProfileCards: React.FC<SelectableProfile> = props => (
  <Grid columns={3}>
    {profiles.map((profile, i) => (
      <GridItem key={profile.name + i}>
        <PartyProfileCard
          profile={profile}
          imgOffsset={[0, 0]}
          onSelect={props.onSelect}
        />
      </GridItem>
    ))}
  </Grid>
)
