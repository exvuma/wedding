import React from 'react'
import slugify from 'slugify'
import { ContainerSmall } from '../utils/Container'
import { Title } from '../utils/Title'
import styled from '@emotion/styled'
import { colors } from '../../theme'
import { CardSection } from '../utils/CardSection'

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
        If the virus is impacting the world by this November to a point where
        none of us can travel to Mexico, this is scary and for reasons that go
        well beyond our wedding. We recognize budgeting and fear of travel are
        huge factors in attending the wedding and we are hoping to work
        something out to make it easier for everyone to come once it’s safe. We
        will have more information as soon as we can. For now, it is totally
        understandable that you don’t follow normal booking procedure, just mark
        your calendars.
      </p>
    ),
  },
  {
    title: 'Can I book through Hyatt directly? Or another resort?',
    body: (
      <p>
        No. Really please don’t this will severely complicate things for our
        wedding. The resorts for these type of weddings depend on the guests
        stat
      </p>
    ),
  },
  {
    title: 'Why do I have to book on the room block?',
    body: (
      <p>
        We were personally very confused about also. It actually saves the
        guests money and makes all guests rates locked in so that guests don't
        get competive over a better deal and feel cheated. It is crucial you
        book on the room block otherwise you can get escorted out of the wedding
        activities. Sorry I don't have more info I am working on a clearer
        explanantion.
      </p>
    ),
  },
  {
    title: 'What about flights, when should I book? How should I book?',
    body: (
      <p>
        For convenience and affordability, we recommend Southwest airlines. SW
        Southwest has direct flights from: Austin, Denver, Houston, and New
        Orleans.
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
    title: 'What room should I get?',
    body: (
      <p>
        This is totally up to you. The wedding guests will be spread out through
        the resort and all rooms have access to all amenities with the exception
        of the adults only Turquoise area - is a small rooftop pool area. If
        you’re into luxury and don’t have kids feel welcome to stay at the
        Turquoise of course. We - the wedding couple - will likely stay there,
        but don’t feel bad if you don’t.
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
])

function slugifyFaqs(faqs: FAQ[]): FAQWithSlug[] {
  return faqs.map(faq => ({ ...faq, slug: 'faq-' + slugify(faq.title) }))
}

export const Faqs: React.FC = () => (
  <>
    <Title>FAQs</Title>
    <CardSection>
      {faqs.map(faq => (
        <Faq key={faq.slug} faq={faq} />
      ))}
    </CardSection>
  </>
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
  position: relative;
  margin-bottom: 0.5em;

  a {
    color: ${colors.gray[4]};
    &:before {
      content: '🔗';
      display: inline-block;
      position: absolute;
      width: 20px;
      margin-left: -35px;
      opacity: 0;
      transition: opacity 0.1s linear;
    }

    &:hover:before {
      opacity: 0.8;
    }
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
