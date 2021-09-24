import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'modern-normalize'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  colors,
  fontFamily,
  breakpoints,
  mobileBaseFontSize,
  newColors,
} from '../theme/theme'
import { baseFontSize } from '../theme/theme'

const PageWrapper = styled.div``

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

export const DefaultLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[
            {
              href:
                'https://fonts.googleapis.com/css?family=Cormorant+SC|Calligraffitti&display=swap',
              rel: 'stylesheet',
            },
            {
              href:
                'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans&display=swap',
              rel: 'stylesheet',
            },
          ]}
        />
        <Global
          styles={css`
            html {
              /* background: ${colors.rose[0]}; */
              background: ${newColors.White};
              scroll-padding-top: 100px;
            }

            body {
              font-family: ${fontFamily.serif};
              font-size: ${baseFontSize};
              color: ${colors.purple[6]};
            }

            @media screen and (max-width: ${breakpoints.mobile}em) {
              body {
                font-size: ${mobileBaseFontSize};
              }
            }

            h1,
            h2,
            h3,
            h4,
            h5 {
              font-family: ${fontFamily.sansserif};
              font-weight: 400;
            }

            p,
            li {
              line-height: 2;
            }

            img {
              display: inline-block;
              max-width: 100%;
            }

            a {
              text-decoration: none;
              color: ${colors.red[4]};
              &:hover {
                color: ${colors.red[4]};
                text-decoration: underline;
              }
            }

            blockquote {
              border-left: solid 10px ${colors.red[4]};
              margin: 0;
              padding: 0.1em 2em;
            }
          `}
        />
        <PageWrapper>{children}</PageWrapper>
      </>
    )}
  />
)
