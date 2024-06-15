import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
            email
            socialLinks {
              text
              url
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export const useEntered = () => {
  return useInView({
    threshold: 1,
    triggerOnce: true,
  })
}
