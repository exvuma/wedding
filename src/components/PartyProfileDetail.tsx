import React, { Component, useRef } from 'react'
import { Flipped } from 'react-flip-toolkit'
import { Profile } from './PartyProfileSection'
import { colors, fontFamily } from '../theme'
import styled from '@emotion/styled'

export const PartyProfileDetail: React.FC<{
  profile: Profile
  parentId: string
  onClose: () => void
}> = props => {
  const el = useRef(null as HTMLDivElement | null)

  return (
    <Details ref={el}>
      <div className="details__bg details__bg--up" />
      <Flipped flipId={`${props.profile.name}-profileBackground`}>
        <div className="details__bg details__bg--down" />
      </Flipped>
      <Flipped flipId={`${props.profile.name}-profileImg`}>
        <img className="details__img" src={props.profile.photoUrl} />
      </Flipped>
      <h2 className="details__title" data-fade-in>
        {props.profile.name}
      </h2>
      <div
        className="details__deco"
        data-fade-in
        style={{
          background: colors.red[5],
        }}
      />
      <h3 className="details__subtitle" data-fade-in>
        Groomsman
      </h3>
      <div className="details__description">{props.profile.bio}</div>
      <button className="details__close" onClick={props.onClose}>
        <div className="icon icon--cross">
          <svg id="icon-cross" viewBox="0 0 24 24" width="100%" height="100%">
            <title>cross</title>
            <path d="M 5.5,2.5 C 5.372,2.5 5.244,2.549 5.146,2.646 L 2.646,5.146 C 2.451,5.341 2.451,5.659 2.646,5.854 L 8.793,12 2.646,18.15 C 2.451,18.34 2.451,18.66 2.646,18.85 L 5.146,21.35 C 5.341,21.55 5.659,21.55 5.854,21.35 L 12,15.21 18.15,21.35 C 18.24,21.45 18.37,21.5 18.5,21.5 18.63,21.5 18.76,21.45 18.85,21.35 L 21.35,18.85 C 21.55,18.66 21.55,18.34 21.35,18.15 L 15.21,12 21.35,5.854 C 21.55,5.658 21.55,5.342 21.35,5.146 L 18.85,2.646 C 18.66,2.451 18.34,2.451 18.15,2.646 L 12,8.793 5.854,2.646 C 5.756,2.549 5.628,2.5 5.5,2.5 Z" />
          </svg>
        </div>
      </button>
    </Details>
  )
}

const Details = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  padding: 40vh 0 10vh 10vw;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  background: ${colors.red[0]};

  & * {
    z-index: 1;
  }

  & .details__bg,
  & .details__img {
    transform-origin: 0 0;
  }

  & .details__bg--up {
    top: 0;
    height: 100vh;
    background: white;
  }

  & .details__bg--down {
    top: 40vh;
    height: 60vh;
    background: ${colors.red[0]};
  }

  & .details__bg {
    width: 100%;
    position: absolute;
    left: 0;
  }

  & .details__img {
    position: fixed;
    top: 10vh;
    right: 10vw;
    width: 30%;
  }

  & .details__title {
    margin: -1.5em 0 0.1em;
    font-size: 2.5em;
    color: ${colors.gray[7]};
    font-family: ${fontFamily.serif};
    font-weight: 700;
  }

  & .details__deco {
    width: 7em;
    height: 20px;
  }

  & .details__subtitle {
    text-transform: uppercase;
    margin: 0.75em 0 1em;
    letter-spacing: 0.115em;
    font-size: 1.75em;
    font-family: ${fontFamily.sansserif};
    color: ${colors.gray[6]};
  }

  & .details__description {
    line-height: 1.5;
    font-weight: 700;
    max-width: 50%;
    margin: 2em 0 0;
  }

  & .details__close {
    position: fixed;
    top: 1em;
    right: 1em;
    border: 0;
    background: none;
    cursor: pointer;
    font-size: 0.85em;
    color: ${colors.gray[5]};
  }

  & .icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    margin: 0 auto;
    fill: currentColor;
  }
`
