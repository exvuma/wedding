import { ContainerSmall } from '../Container'
// import { ColoredBlade } from '../ColoredBlade'
import { Flex, Box } from 'reflexbox'
import { PlaneAnimation } from '../PlaneAnimation'
import { space, colors, fontSizes, fontFamily, newColors } from '../../theme'
import React from 'react'
import styled from '@emotion/styled'
import registerScreenShotUrl2 from '../../img/Register_screenshot2.png'
import { Title } from '../utils/Title'

const BookContentEl: React.FC = ({ children }) => (
  <ContainerSmall>
    <div style={{ color: newColors.DarkShade }}>
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
const Notice = styled.div`
  margin: 1em 0;
  font-family: ${fontFamily.sansserif};
  font-size: ${fontSizes[2]}em;
`
const StepWrapper = styled.div`
  background: ${newColors.LightShades};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000001' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border-radius: 3px;
  padding: ${space[2]}em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: ${fontFamily.sansserif};
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s ease-out;
  height: 100%;
  border-top: solid 8px ${colors.red[2]};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  & img {
    width: 100%;
    max-width: 100%;
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
  margin: 0 auto;
  padding: ${space[2]}em;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.red[2]};
  & > div {
    color: ${newColors.LightShades};
    font-size: ${fontSizes[5]}em;
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
  background: ${colors.red[2]};
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  & > div {
    color: ${newColors.LightShades};
    font-size: ${fontSizes[2]}em;
  }
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  :hover {
    text-decoration: none;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`

const StepsTitle = styled.h2`
  font-family: ${fontFamily.serif};
  margin: 1em 0 0 0;
  color: ${newColors.VeryDarkShade};
`
const StepsDetails = styled.p`
  font-family: ${fontFamily.sansserif};
  font-size: 0.8em;
  letter-spacing: 1px;
  color: ${newColors.DarkShades};
  font-size: ${fontSizes[2]}em;
  margin: ${space[1]}em 0 ${space[1]}em 0;
  transition: all 0.3s linear;
  text-align: left;
`
const ContentTitle1 = `Go to Site`
const ContentTitle2 = `Register an account`
const ContentTitle3 = `Book Room`
const ContentDetails1: React.FC = () => (
  <>
    Visit our travel agent’s booking site, go to "Find a Wedding" and submit:
    <ul>
      <li>
        {' '}
        Wedding couple’s last name: <strong>Fawcett</strong>
      </li>
      <li>
        {' '}
        Wedding code: <strong>MARRYTHEJOHN</strong>
      </li>
    </ul>
  </>
)
const ContentDetails2: React.FC = () => (
  <>
    You’ll be redirect to a page to register for an account
    <img src={registerScreenShotUrl2}></img>
  </>
)
const ContentDetails3: React.FC = () => (
  <>
    You’ll find all the details on the hotel, rooms and policy here. Select your
    room and dates of choice
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
        <Button href="https://www.destinationweddings.com/Weddings/Guests/AttendaWedding.aspx?dw_weddingcode=MARRYTHEJOHN&dw_bname=Bernard">
          <div>Book Now</div>
        </Button>
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
      {/* <ColoredBlade base="gold" index={5} theme={{}}> */}
      <Box p={space[1] + 'em'} textAlign="center" color={colors.aqua[2]}>
        <Notice>Do not book off the room block!</Notice>
      </Box>
      {/* </ColoredBlade> */}
      <BookContentEl>
        <BookContentAlso />
      </BookContentEl>
    </div>
  )
}
