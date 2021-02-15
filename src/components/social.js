import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const List = styled.ul`
  ${({ theme }) => theme.mixins.unstyledList}

  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  margin: 0.25rem 0.5rem;
`

const Link = styled.a`
  color: inherit;

  font-size: 0.875rem;
  font-weight: bold;

  text-decoration: none;
  text-transform: uppercase;
`

const Social = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              text
              url
            }
          }
        }
      }
    `
  )

  const socialLinks = site.siteMetadata?.socialLinks

  return (
    <List>
      {socialLinks.map((link, i) => (
        <ListItem key={i}>
          <Link href={link.url} target="_blank">
            {link.text}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default Social
