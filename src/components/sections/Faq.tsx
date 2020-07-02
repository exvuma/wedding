import React from 'react'
import slugify from 'slugify'
import { Title } from '../utils/Title'
import styled from '@emotion/styled'
import { colors } from '../../theme'
import { CardSection } from '../utils/CardSection'
import { Container } from '../utils/Container'

export type FAQ = {
  title: string
  body: JSX.Element
}

export type FAQWithSlug = FAQ & { slug: string }

export const faqs = slugifyFaqs([
  {
    title: 'What about COVID-19 aka Coronavirus?',
    body: (
      <p>
        We're still shooting for November, but if the virus hasn't settled down
        by then, we're all in bigger trouble than a cancelled wedding.
        Coronavirus is a big deal, so we understand if you hold off on booking
        travel. However, we would like you to mark your calendars. We recommend
        checking the flight is fully refundable and definetly purchasing travel
        insurance through the travel agent, Jessica.
      </p>
    ),
  },
  {
    title: 'Can I book through Hyatt directly? Or another resort?',
    body: (
      <p>
        No. Really please don’t this will severely complicate things for our
        wedding. The resorts for these type of weddings depend on the guests
        staying at the resort. For rare situations where you cannot stay the 3
        nights or at the resort but want to attend the wedding, please contact
        John or me.
      </p>
    ),
  },
  {
    title: 'Why do I have to book on the room block?',
    body: (
      <p>
        This can seem confusing at first. It actually saves the guests money
        when families are sharing rooms. If you are interested in sharing a room
        with another guest(s), please let us know and we can pair you with
        someone. The block also makes all guests rates locked in so guests don't
        have to track fluctuating prices and don't get competitive over a better
        deal and feel cheated. It is crucial you book on the room block
        otherwise you can get escorted out of the wedding
      </p>
    ),
  },
  {
    title: 'What about flights, when should I book? How should I book?',
    body: (
      <p>
        Book as soon as you feel comfortable with any airline of your choice.
        Fly into Cancun airport (CUN). For convenience and affordability, we
        previously recommended Southwest airlines. As of June 2020 with COVID-19
        there are only direct flights from: Denver and Houston. Airlines are
        slowly releasing more fligths.
      </p>
    ),
  },
  {
    title: 'What day should I arrive? Leave?',
    body: (
      <p>
        The wedding party will arrive Wednesday, 11/18. You can stay as long as
        you like, but keep in mind all guests are required to a minimum of three
        nights. We recommend coming at least the day before 11/19, staying for
        the weekend, and checking out 11/22. There will be a planned included
        group activity the day after the wedding, Saturday 11/21.
      </p>
    ),
  },
  {
    title: 'Can I invite a plus 1?',
    body: (
      <p>
        Yes, anyone that you love we love and is welcome to come! One of the
        benefits of a destination wedding is we don’t have to sweat about head
        count.
      </p>
    ),
  },
  {
    title: 'I still have questions about getting to the wedding',
    body: (
      <p>
        Should you need further information/help with booking please contact
        Jessica (jbull@destinationweddings.com | (763) 568-3536). She is our wonderful
        travel agent, tell her your room needs and she will get you all settled
        with a direct invoice.
      </p>
    ),
  },
])

function slugifyFaqs(faqs: FAQ[]): FAQWithSlug[] {
  return faqs.map((faq) => ({ ...faq, slug: 'faq-' + slugify(faq.title) }))
}

export const Faqs: React.FC = () => (
  <Container>
    <Title>FAQs</Title>
    <CardSection>
      {faqs.map((faq) => (
        <Faq key={faq.slug} faq={faq} />
      ))}
    </CardSection>
  </Container>
)

export const Faq: React.FC<{ faq: FAQWithSlug }> = ({ faq }) => (
  <FaqBody>
    <FaqTitle id={faq.slug}>
      <a href={`#${faq.slug}`}>{faq.title}</a>
    </FaqTitle>
    {faq.body}
  </FaqBody>
)

const FaqTitle = styled.h3`
  font-size: 1.5em;
  position: relative;
  margin-bottom: 0.5em;

  a {
    color: ${colors.gray[4]};
    /* &:before {
      content: '🔗';
      display: inline-block;
      position: absolute;
      width: 20px;
      margin-left: -40px;
      margin-top: 12px;
      opacity: 0;
      transition: opacity 0.1s linear;
      font-size: 0.6em;
    } */

    /* &:hover:before {
      opacity: 0.8;
    } */
  }
`

const FaqBody = styled.div`
  ${FaqTitle} + p {
    margin-top: 0;
  }

  & ~ & {
    margin-top: 2.5em;
  }
`
