import { ContainerSmall, Container } from '../Container'
export const Book: React.FC = () => (
  <ContainerSmall>
    <div>
      <p>
        John and Victoria are getting married. This is not the official
        invitation, but here are some things you should know:
      </p>
      <ul>
        <li>You need a passport</li>
        <li>
          Plan to stay at least 3 nights in the window November 18th - 22nd
        </li>
        <li>
          <strong>Do not</strong> book a hotel, Airbnb, or any other lodging
          just yet
          <ul>
            <li>We will send you information regarding the room block</li>
          </ul>
          <li>You may buy flights now</li>
        </li>
      </ul>
    </div>
  </ContainerSmall>
)
