import { ContainerSmall } from '../utils/Container'
import { Flex, Box } from 'reflexbox'
import { space, colors, fontSizes, fontFamily, newColors } from '../../theme'
import React from 'react'
import styled from '@emotion/styled'
import registerScreenShotUrl from '../../img/Register_screenshot3.png'
import { Title } from '../utils/Title'
import { CardWrapper } from '../utils/CardWrapper'
import { ColoredBlade } from '../ColoredBlade'

const BookContentEl: React.FC = ({ children }) => (
  <ContainerSmall>
    <div style={{ color: newColors.DarkShades }}>
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
    <Notice base="rose" index={2}>
      Do not book off the room block!
    </Notice>
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
const Notice = styled(ColoredBlade)`
  margin: 1em 0;
  font-family: ${fontFamily.sansserif};
  font-size: ${fontSizes[2]}em;
  padding: 1em;
  border-radius: 5px;
  text-align: center;
`

const StepWrapper = styled(CardWrapper)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 1em 2em;
  cursor: initial;
  &:hover {
    transform: none;
    box-shadow: initial;
  }
`

//  remove this remove hvoer
// & ${StepsTitle} {
//   color: ${colors.red[4]};
// }
const CircleFrame = styled<'div', { offset: [number, number] }>('div')`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
  margin: 2em auto 0;
  padding: ${space[2]}em;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.red[2]};
  line-height: 0;
  & > div {
    color: ${newColors.LightShades};
    font-size: ${fontSizes[5]}em;
    margin-top: -3px;
  }
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
      Visit our travel agent’s booking site, go to "Find a Wedding" and submit:
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

export const Steps: React.FC = () => (
  <Flex px={6} py={0}>
    <Box style={{ flex: 1, margin: space[6] * 6 }}>
      {/* <Box style={{ flex: 1, margin: space[6] }}> */}
      <StepWrapper>
        <CircleFrame offset={[0, 0]}>
          <div>1</div>
        </CircleFrame>
        <StepsTitle>{ContentTitle1}</StepsTitle>
        <StepsDetails>
          <ContentDetails1></ContentDetails1>
        </StepsDetails>
        <StepAction>
          <Button href="https://www.destinationweddings.com/Weddings/Guests/AttendaWedding.aspx?dw_weddingcode=MARRYTHEJOHN&dw_bname=Bernard">
            Book Now
          </Button>
        </StepAction>
      </StepWrapper>
    </Box>
    <Box style={{ flex: 1, margin: space[6] * 6 }}>
      <StepWrapper>
        <CircleFrame offset={[0, 0]}>
          <div>2</div>
        </CircleFrame>
        <StepsTitle>{ContentTitle2}</StepsTitle>
        <StepsDetails>
          <ContentDetails2></ContentDetails2>
        </StepsDetails>
      </StepWrapper>
    </Box>
    <Box style={{ flex: 1, margin: space[6] * 6 }}>
      <StepWrapper>
        <CircleFrame offset={[0, 0]}>
          <div>3</div>
        </CircleFrame>
        <StepsTitle>{ContentTitle3}</StepsTitle>
        <StepsDetails>
          <ContentDetails3></ContentDetails3>
        </StepsDetails>
      </StepWrapper>
    </Box>
  </Flex>
)
export const Book: React.FC = () => {
  return (
    <div>
      {/* <div style={{ background: newColors.DarkShades }}> */}
      <Title>Book</Title>
      <BookContentEl>
        <BookContent />
      </BookContentEl>
      <Steps />
      <BookContentEl>
        <BookContentAlso />
      </BookContentEl>
    </div>
  )
}
