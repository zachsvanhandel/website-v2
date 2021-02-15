import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"

import * as styles from "../../styles"
import Social from "../social"

const Section = styled(styles.Section)`
  min-height: 100vh;
`

const Content = styled(styles.Content)`
  flex-basis: 37.5rem;
`

const Headline = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.headline}
    ${theme.mixins.fadeUpAnimation}
  `}

  font-size: 3.75rem;
`

const Copy = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.copy}
    ${theme.mixins.fadeUpAnimation}
  `}
`

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.fadeUpAnimation}

  margin-top: 0.75rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`

const Button = styled.a`
  ${({ theme }) => theme.mixins.ctaButton}

  margin: 0.5rem;
`

const SocialWrapper = styled.div`
  ${({ theme }) => theme.mixins.fadeUpAnimation}

  margin-top: 1.875rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`

const Hero = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `
  )

  const email = site.siteMetadata.email

  return (
    <Section>
      <Content>
        <Headline>Zach Van Handel</Headline>
        <Copy delay="150ms">
          Passionate. Innovative. Meticulous. And always improving. Looking for
          a software engineer in the Denver area? You've found the one.
        </Copy>
        <ButtonWrapper delay="300ms">
          <Button href="/resume.pdf" target="_blank">
            View resume
          </Button>

          <Button href={`mailto:${email}`} target="_blank">
            Get in touch
          </Button>
        </ButtonWrapper>
        <SocialWrapper delay="450ms">
          <Social />
        </SocialWrapper>
      </Content>
    </Section>
  )
}

export default Hero
