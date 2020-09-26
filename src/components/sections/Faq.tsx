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
    title: 'What if I already booked?',
    body: (
      <p>
        Great news, you did everything right by booking ahead of time. Your
        options are a) Move all that you paid to the new date, travel insurance
        and 100% of funds transfer to the new date. b) If you want cash back,
        you can get it all cash back with the exception of the $75/adult
        insurance and have the option to rebook later if you like. c) Want to
        keep your Nov 2020 trip to Cancun regardless of our wedding? Talk to V.
      </p>
    ),
  },
  {
    title: 'Why Oct. 2021?',
    body: (
      <p>
        Our ideal date is post-COVID, post-hurricane, and pre-flu season.
        October is the month that fits all 3.
      </p>
    ),
  },
  {
    title: 'Can I book through Hyatt directly? Or another resort?',
    body: (
      <p>
        While you can book through the Hyatt directly, you will not receive any
        of the benefits of the group: free transportation to/from airport,
        welcome drinks, and easy coordination for the wedding coordinator.
      </p>
    ),
  },
  {
    title: 'Why is this resort expensive?',
    body: (
      <p>
        The resort is all inclusive. Meaning food, 24/7 room service, premium
        beverages, and activites all included. The resort is located at one of
        the most gorgeous areas in Cancun on a peninsula. Also family friendly.
        Let us know if you're interested in sharing a room.
      </p>
    ),
  },
  {
    title: 'Why do I have to book on the room block?',
    body: (
      <p>
        This can seem confusing at first. It actually saves the guests money
        when families are sharing rooms. There are group benefits to sharing
        rooms: free transportation to/from airport, locked in rate, welcome
        drinks, and easy coordination for the wedding coordinator especially in
        emergency situation such as COVID-19.
        <em>
          If you do not book on the room block, you may not be able to attend
          the wedding or spend time with the wedding party.
        </em>
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
    title: 'How do I get from the airport to the hotel?',
    body: (
      <p>
        A hotel shuttle is included with your booking. When you book your room,
        Jessica will ask for your arrival time and will coordinate a shuttle to
        take you to the resort.
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
        Please contact Jessica (jbull@destinationweddings.com | (763) 568-3536).
        She is our wonderful travel agent, tell her your room needs and she will
        get you taken care of.
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
