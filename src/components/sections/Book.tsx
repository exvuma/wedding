import { ContainerSmall } from '../Container'
import { ColoredBlade } from '../ColoredBlade'
import { Flex, Box } from 'reflexbox'
import { PlaneAnimation } from '../PlaneAnimation'
import { space, colors, fontSizes, fontFamily } from '../../theme'
import React from 'react'
import styled from '@emotion/styled'
import registerScreenShotUrl2 from '../../img/Register_screenshot2.png'

export const BookContent: React.FC = () => (
  <ContainerSmall>
    <div>
      <p>
        We’re getting married at the beautiful Hyatt Ziva in Cancun Mexico. We
        want you there to share our special day with us more than any gift on a
        registry.
      </p>
      <p>Book your hotel reservation as soon as possible by: </p>
    </div>
  </ContainerSmall>
)
const Notice = styled.div`
  margin: 1em 0;
  font-family: ${fontFamily.sansserif};
  font-size: ${fontSizes[2]}em;
`
const CardWrapper = styled.div`
  background: white;
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
  border-top: solid 8px ${colors.red[5]};
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
  // border: solid 15px ${colors.gray[1]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.red[5]};
  & > div {
    color: white;
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
  background: ${colors.red[5]};
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  & > div {
    color: white;
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
`
const StepsDetails = styled.p`
  font-family: ${fontFamily.sansserif};
  font-size: 0.8em;
  letter-spacing: 1px;
  color: ${colors.gray[5]};
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
  <Flex p={100}>
    <Box style={{ flex: 1, margin: space[6] * 6 }}>
      {/* <Box style={{ flex: 1, margin: space[6] }}> */}
      <CardWrapper>
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
      </CardWrapper>
    </Box>
    <Box style={{ flex: 1, margin: space[6] * 6 }}>
      <CardWrapper>
        <CircleFrame offset={[0, 0]}>
          <div>2</div>
        </CircleFrame>
        <StepsTitle>{ContentTitle2}</StepsTitle>
        <StepsDetails>
          <ContentDetails2></ContentDetails2>
        </StepsDetails>
      </CardWrapper>
    </Box>
    <Box style={{ flex: 1, margin: space[6] * 6 }}>
      <CardWrapper>
        <CircleFrame offset={[0, 0]}>
          <div>3</div>
        </CircleFrame>
        <StepsTitle>{ContentTitle3}</StepsTitle>
        <StepsDetails>
          <ContentDetails3></ContentDetails3>
        </StepsDetails>
      </CardWrapper>
    </Box>
  </Flex>
)
export const Book: React.FC = () => {
  return (
    <>
      <ColoredBlade base="gray" index={3}>
        <Flex mx={space[6]}>
          {/* <Flex pt={space[7] + 'em'} pb={space[4] + 'em'}> */}
          <Box style={{ position: 'relative' }} flex={1}>
            <PlaneAnimation numPlanes={4} />
          </Box>
          <Box flex={1} style={{ position: 'relative', textAlign: 'center' }}>
            <PlaneAnimation numPlanes={0} />
            <h2
              style={{
                fontSize: '3em',
                marginTop: space[3] + 'em',
                marginBottom: space[1] + 'em',
              }}
            >
              Book
            </h2>
          </Box>
          <Box style={{ position: 'relative' }} flex={1}>
            <PlaneAnimation numPlanes={4} />
          </Box>
        </Flex>
      </ColoredBlade>
      <ColoredBlade base="gold" index={5}>
        <Box p={space[4] + 'em'} textAlign="center">
          <Notice>Do not book off the room block!</Notice>
        </Box>
      </ColoredBlade>
      <BookContent />
      <Steps />
    </>
  )
}
