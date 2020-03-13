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
          ]}
        />
        <Global
          styles={css`
            html {
              background: ${newColors.White};
            }

            body {
              font-family: ${fontFamily.serif};
              font-size: ${baseFontSize};
              color: ${newColors.DarkShades};
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
              color: ${colors.red[2]};
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
              color: ${colors.red[2]};
              &:hover {
                text-decoration: underline;
                color: ${colors.red[2]};
              }
            }
          `}
        />
        <PageWrapper>{children}</PageWrapper>
      </>
    )}
  />
)
