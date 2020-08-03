import { ContainerSmall, Container } from '../utils/Container'
import {
  space,
  colors,
  fontSizes,
  fontFamily,
  newColors,
  breakpoints,
} from '../../theme'
import React from 'react'
import styled from '@emotion/styled'
import registerScreenShotUrl from '../../img/Register_screenshot3.png'
import { ColoredBlade } from '../ColoredBlade'
import { CardSection } from '../utils/CardSection'
import { Title } from '../utils/Title'

export const BookContent: React.FC = () => (
  <>
    <p>
      We’re getting married at the beautiful Hyatt Ziva in Cancun Mexico. We
      want you there to share our special day with us more than any gift on a
      registry.
    </p>
    <Toast base="aqua" index={1}>
      Do not book off the room block!
    </Toast>
    <p style={{ paddingBottom: '2em' }}>
      Book your hotel reservation as soon as possible by:{' '}
    </p>
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
const BreneTitle = styled.h4``

const CircleFrame = styled.div`
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
  background: ${colors.purple[5]};
  color: ${colors.purple[0]};
  line-height: 0;
  & > div {
    font-size: ${fontSizes[5]}em;
    margin-top: -3px;
  }
  margin-top: -1.5em;
`

const ContentTitle0 = `RSVP`
const ContentTitle1 = `Go to Site`
const ContentTitle2 = `Register an account`
const ContentTitle3 = `Book Room`
const ContentDetails0: React.FC = () => (
  <>
    <p>
      Let us know by filling out this{' '}
      <a href="https://forms.gle/QbSNJyRrjPbYnQkn8">
        Google Form
      </a>
      .
    </p>
  </>
)
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
    <img style={{ maxWidth: '50%' }} src={registerScreenShotUrl}></img>
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
      <CircleFrame>
        <div>0</div>
      </CircleFrame>
      <StepsContent>
        <BreneTitle>{ContentTitle0}</BreneTitle>
        <ContentDetails0 />
      </StepsContent>
      <CircleFrame>
        <div>1</div>
      </CircleFrame>
      <StepsContent>
        <BreneTitle>{ContentTitle1}</BreneTitle>
        <ContentDetails1 />
      </StepsContent>
      <CircleFrame>
        <div>2</div>
      </CircleFrame>
      <StepsContent>
        <BreneTitle>{ContentTitle2}</BreneTitle>
        <ContentDetails2 />
      </StepsContent>
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
    <Container>
      <Title>Book</Title>
      <CardSection>
        <BookContent />
        <BookStep>
          <BookStepNumberColumn>
            <BookStepNumberFrame index={1} />
          </BookStepNumberColumn>
          <BookStepContentColumn>
            <BookStepTitle>{ContentTitle0}</BookStepTitle>
            <ContentDetails0 />
          </BookStepContentColumn>
        </BookStep>
        <BookStep>
          <BookStepNumberColumn>
            <BookStepNumberFrame index={2} />
          </BookStepNumberColumn>
          <BookStepContentColumn>
            <BookStepTitle>{ContentTitle1}</BookStepTitle>
            <ContentDetails1 />
          </BookStepContentColumn>
        </BookStep>
        <BookStep>
          <BookStepNumberColumn>
            <BookStepNumberFrame index={3} />
          </BookStepNumberColumn>
          <BookStepContentColumn>
            <BookStepTitle>{ContentTitle2}</BookStepTitle>
            <ContentDetails2 />
          </BookStepContentColumn>
        </BookStep>
        <BookStep>
          <BookStepNumberColumn>
            <BookStepNumberFrame index={4} />
          </BookStepNumberColumn>
          <BookStepContentColumn>
            <BookStepTitle>{ContentTitle3}</BookStepTitle>
            <ContentDetails3 />
          </BookStepContentColumn>
        </BookStep>
      </CardSection>
    </Container>
  )
}

const BookStep = styled.div`
  display: flex;
  & + & {
    margin-top: 2em;
  }

  @media screen and (max-width: ${breakpoints.mobile}em) {
    flex-direction: column;
  }
`
const BookStepNumberColumn = styled.div`
  width: 70px;
`
const BookStepContentColumn = styled.div`
  flex: 1;
  padding-left: 2em;
  padding-top: 1em;

  @media screen and (max-width: ${breakpoints.mobile}em) {
    padding-left: 0;
  }
`
const BookStepNumberFrame = styled<'div', { index: number }>('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: ${colors.red[4]};
  color: ${colors.red[0]};
  font-size: 2.5em;
  &:before {
    content: '${({ index }) => index}';
    display: inline-block;
    /* The 3 in our font has a hanger that goes below the baseline */
    /* This makes it feel more centered */
    margin-top: ${({ index }) => (index === 3 ? '-19px' : '-13px')};
  }
`
const BookStepTitle = styled.h4`
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 0.25em;
`
