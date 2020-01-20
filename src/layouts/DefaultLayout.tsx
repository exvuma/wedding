import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'modern-normalize'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fontFamily } from '../theme/theme'
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
              background: ${colors.red[0]};
            }

            body {
              font-family: ${fontFamily.serif};
              font-size: ${baseFontSize};
              color: ${colors.gray[6]};
            }

            p,
            li {
              line-height: 1.6;
            }

            img {
              max-width: 100%;
            }
          `}
        />
        <PageWrapper>{children}</PageWrapper>
      </>
    )}
  />
)
