import { ContainerSmall } from '../utils/Container'
import { Flex, Box } from 'reflexbox'
import { space, colors, fontSizes, fontFamily, newColors } from '../../theme'
import React from 'react'
import styled from '@emotion/styled'
import registerScreenShotUrl from '../../img/Register_screenshot3.png'
// import { Title } from '../utils/Title'
import { CardWrapper } from '../utils/CardWrapper'
import { ColoredBlade } from '../ColoredBlade'
import { CardSection } from '../utils/CardSection'
import { Title } from '../utils/Title'

const BookContentEl: React.FC = ({ children }) => (
  <ContainerSmall>
    <div style={{ color: colors.purple[6] }}>
      <p>{children}</p>
    </div>
  </ContainerSmall>
)

export const BookContent: React.FC = () => (
  <>
    <p>
      We’re getting married at the beautiful Hyatt Ziva in Cancun Mexico. We
      want you there to share our special day with us more than any gift on a
      registry.
    </p>
    <Toast base="rose" index={1}>
      Do not book off the room block!
    </Toast>
    <p>Book your hotel reservation as soon as possible by: </p>
  </>
)
export const BookContentAlso: React.FC = () => (
  <p>
    To travel to Cancun also:
    <ul>
      <li>Have a passport</li>
      <li>Book flights with or without help of travel agent</li>
    </ul>
  </p>
)
const Toast = styled(ColoredBlade)`
  margin: 0.5em 0;
  font-family: ${fontFamily.sansserif};
  font-size: ${fontSizes[2]}em;
  color: ${colors.red[4]};
  padding: 0.8em;
  border-radius: 5px;
  text-align: center;
`

const StepsContent = styled('div')`
  padding: 25px 0 23px 106px;
`

const Bar = styled('div')`
  &::before {
    content: '';
    display: block;
    /* position: absolute; */
    top: 14px;
    border-bottom: 2px solid ${colors.rose[1]};
    left: 0;
    right: 0;
  }
`
const Number = styled('span')`
  position: relative;
  z-index: 2;
  display: block;
  float: left;
  min-width: 58px;
  padding: 6px 0 8px;
  margin-left: 20px;
  border-radius: 5px;
  color: #959595;
  border: 5px solid #959595;
  border-top-color: ${colors.red[2]};
  border-right-color: ${colors.red[2]};
  border-bottom-color: ${colors.red[2]};
  border-left-color: ${colors.red[2]};
  background: #fff;
  line-height: 26px;
  font-style: italic;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.7px;
`
const BreneTitle = styled('span')`
  position: relative;
  z-index: 1;
  display: block;
  /* padding: 25px 0 23px 106px; */
  color: ${colors.red[4]};
  font-family: ${fontFamily.sansserif};
  line-height: 29px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const CircleFrame = styled<'div', { offset: [number, number] }>('div')`
  position: relative;
  z-index: 2;
  display: block;
  float: left;
  min-width: 58px;
  width: 70px;
  height: 70px;
  /* margin: 2em auto 0; */
  padding: ${space[2]}em;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.red[4]};
  line-height: 0;
  & > div {
    color: ${newColors.LightShades};
    font-size: ${fontSizes[5]}em;
    margin-top: -3px;
  }
  margin-top: -1.5em;
`
const Button = styled('a')`
  position: relative;
  text-decoration: none;
  display: inline-block;
  border-radius: ${space[1]}em;
  margin: 0 auto;
  padding: ${space[1]}em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.rose[2]};
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  color: ${newColors.LightShades};
  font-size: ${fontSizes[2]}em;
  transition: all 0.05s linear;

  :hover {
    color: ${newColors.LightShades};
    text-decoration: none;
    background: ${colors.rose[1]};
  }
`

const StepsTitle = styled.h2`
  font-family: ${fontFamily.sansserif};
  margin: 1em 0;
  color: ${newColors.VeryDarkShade};
`
const StepsDetails = styled.div`
  flex: 1;
  font-family: ${fontFamily.serif};
  font-size: 1em;
  color: ${newColors.DarkShades};
  font-size: ${fontSizes[2]}em;
  margin: ${space[1]}em 0 ${space[1]}em 0;
  transition: all 0.3s linear;
  text-align: left;
`

const StepAction = styled.div`
  padding: 1em 0;
`

const ContentTitle1 = `Go to Site`
const ContentTitle2 = `Register an account`
const ContentTitle3 = `Book Room`
const ContentDetails1: React.FC = () => (
  <>
    <p>
      Visit our{' '}
      <a href="https://www.destinationweddings.com/Weddings/Guests/AttendaWedding.aspx?dw_weddingcode=MARRYTHEJOHN&dw_bname=Bernard">
        travel agent’s booking site
      </a>
      , go to "Find a Wedding" and submit:
    </p>
    <ul>
      <li>
        Wedding couple’s last name: <strong>Fawcett</strong>
      </li>
      <li>
        Wedding code: <strong>MARRYTHEJOHN</strong>
      </li>
    </ul>
  </>
)
const ContentDetails2: React.FC = () => (
  <>
    <p>You’ll be redirected to a page to register for an account.</p>
    <img src={registerScreenShotUrl}></img>
  </>
)
const ContentDetails3: React.FC = () => (
  <>
    <p>Select your room and dates of choice and pay the $100 deposit.</p>
  </>
)

export const BreneBlock: React.FC = () => {
  return (
    <>
      <BookContent />
      <Bar />
      <CircleFrame>
        <div>1</div>
      </CircleFrame>
      <StepsContent>
        <BreneTitle>{ContentTitle1}</BreneTitle>
        <ContentDetails1 />
      </StepsContent>
      <Bar />
      <CircleFrame>
        <div>2</div>
      </CircleFrame>
      <StepsContent>
        <BreneTitle>{ContentTitle2}</BreneTitle>
        <ContentDetails2 />
      </StepsContent>
      <Bar />
      <CircleFrame>
        <div>3</div>
      </CircleFrame>
      <StepsContent>
        <BreneTitle>{ContentTitle3}</BreneTitle>
        <ContentDetails3 />
      </StepsContent>
    </>
  )
}
export const Book2: React.FC = () => {
  return (
    <>
      <Title>Book</Title>
      <CardSection>
        <BreneBlock />
      </CardSection>
    </>
  )
}
