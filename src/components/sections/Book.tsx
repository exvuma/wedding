import { ContainerSmall, Container } from '../Container'
import { ColoredBlade } from '../ColoredBlade'
import { Flex, Box } from 'reflexbox'
import { PlaneAnimation } from '../PlaneAnimation'
import { space } from '../../theme'
import React from 'react'
export const BookContent: React.FC = () => (
  <ContainerSmall>
    <div>
      <p>
        We’re getting married at the beautiful Hyatt Ziva in Cancun Mexico. We
        want you there to share our special day with us more than any gift on a
        registry. Book your room on the hotel’s room block we have set up as
        soon as possible. To work with your budget, the travel agency allows
        interest free payments.
      </p>
      <p>
        To book your hotel reservation start out by visiting our travel agent’s
        <a href="https://www.destinationweddings.com/Weddings/Guests/AttendaWedding.aspx?dw_weddingcode=MARRYTHEJOHN&dw_bname=Bernard">
          &nbsp;booking site
        </a>
        , register an account, and you’ll be directed to fill out a form. You’ll
        find a lot more details about the resort there.
      </p>
      <ul>
        <li>Wedding couple’s last name: Fawcett</li>
        <li>Wedding code: MARRYTHEJOHN</li>
      </ul>
      <p>
        Our number one goal is to get you, our guests, there and meet one
        another. Please don’t hesitate to ask for help for us to get you there.
        For any inquiries about the room block or transportation contact our
        amazing travel agent, Jessica Bull. Which you’ll find her contact on the
        form. If you get stuck any step of the way aside from room booking
        contact us. Victoria - (408) 396-2467 or John (469) 587-5077
      </p>
      <h2>TLDR; </h2>
      <p>
        Book your hotel book now for at least the minimum days you’d like to
        stay. You can always add days to your reservations later. Book your
        flight on your favorite airline (we recommend Southwest ) whatever time
        works.
      </p>
      <button>BOOK NOW</button>
    </div>
  </ContainerSmall>
)
export const Book: React.FC = () => {
  return (
    <>
      <ColoredBlade base="blue" index={6}>
        <Flex>
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
      <ColoredBlade base="red" index={6}>
        <Box p={space[4] + 'em'} textAlign="center">
          <h2 style={{ fontSize: '3em' }}>Do NOT Book Off the Room Block!</h2>
        </Box>
      </ColoredBlade>
      <BookContent />
    </>
  )
}
