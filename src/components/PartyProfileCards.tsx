import React from 'react'
import { Grid, GridItem } from './Grid'
import { profiles } from '../profiles'
import { PartyProfileCard } from './PartyProfileCard'
import { SelectableProfile } from './PartyProfileCard2'

export const PartyProfileCards: React.FC<SelectableProfile> = props => (
  <Grid columns={[2, 3]}>
    {profiles.map((profile, i) => (
      <GridItem key={profile.name + i}>
        <PartyProfileCard profile={profile} onSelect={props.onSelect} />
      </GridItem>
    ))}
  </Grid>
)
