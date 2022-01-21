import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Container } from './utils/Container'

export const RescheduleUpdateHomepage: React.FC<{ pageContext: any }> = ({
  pageContext,
}) => {
  return (
    <DefaultLayout>
      <Container>
        <ReactMarkdown
          children={pageContext.contents}
          remarkPlugins={[remarkGfm]}
        />
      </Container>
    </DefaultLayout>
  )
}

export default RescheduleUpdateHomepage
