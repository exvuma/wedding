import { ContainerSmall } from '../Container'
import { Title } from '../utils/Title'

export const Faq: React.FC = () => (
  <ContainerSmall>
    <div
      style={
        {
          // fontSize: '1.2em',
          // display: 'block',
          // fontFamily: 'Helvetica Neue',
          // marginTop: '0em',
          // marginBottom: '0.5em',
        }
      }
    >
      <Title>FAQs</Title>
      <p>
        <strong>Why do I have to book on the room block?</strong>
        <br />I - Victoria - was personally very confused about also. It is
        crucial you book on the room block otherwise you can get escorted out of
        the wedding activities
      </p>
      <p>
        <strong>
          What about flights, when should I book? How should I book?{' '}
        </strong>
        <br />
        For convenience and affordability, we recommend Southwest airlines. SW
        Southwest has direct flights from: Austin, Denver, Houston, and New
        Orleans.
      </p>

      <p>
        <strong>Can I book through Hyatt directly? Or another resort?</strong>
        <br />
        No. Really please don’t this will severely complicate things for our
        wedding. The resorts for these type of weddings depend on the guests
        stat
      </p>
      <p>
        <strong>What day should I arrive? Leave?</strong>
        <br />
        The wedding party will arrive Wednesday, 11/18. You can stay as long as
        you like, but keep in mind all guests are required to a minimum of three
        nights. We recommend coming at least the day before 11/19, staying for
        the weekend, and checking out 11/22. There will be a planned included
        group activity the day after the wedding, Saturday 11/21.
      </p>
      <p>
        <strong>What room should I get?</strong>
        <br />
        This is totally up to you. The wedding guests will be spread out through
        the resort and all rooms have access to all amenities with the exception
        of the adults only Turquoise area - is a small rooftop pool area. If
        you’re into luxury and don’t have kids feel welcome to stay at the
        Turquoise of course. We - the wedding couple - will likely stay there,
        but don’t feel bad if you don’t.
      </p>
      <p>
        <strong>Can I invite a plus 1?</strong>
        <br />
        Yes, anyone that you love we love and is welcome to come! One of the
        benefits of a destination wedding is we don’t have to sweat about head
        count.
      </p>
    </div>
  </ContainerSmall>
)
