import React from "react"
import * as gatsby from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "../styles"

const Section = styled(styles.Section)`
  min-height: 100vh;
`

const Content = styled(styles.Content)`
  ${({ theme }) => theme.mixins.fadeUpAnimation}
`

const Headline = styled.h1`
  ${({ theme }) => theme.mixins.headline}
`

const Copy = styled.p`
  ${({ theme }) => theme.mixins.copy}
`

const Link = styled(gatsby.Link)`
  ${({ theme }) => theme.mixins.ctaLink}
`

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404 Not Found" />

      <Section>
        <Content>
          <Headline>404</Headline>

          <Copy>That page could not be found.</Copy>

          <Link to="/">Return to home</Link>
        </Content>
      </Section>
    </Layout>
  )
}

export default NotFoundPage
