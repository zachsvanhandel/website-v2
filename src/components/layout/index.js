import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../../hooks"

import styles from "./index.module.scss"

// todo: is this readable? If so, can something similar be done in _typography.scss?
const fonts = Object.entries({
  Montserrat: [`Bold`, `BoldItalic`],
  OpenSans: [`Regular`, `Italic`, `Bold`, `BoldItalic`],
})
  .map(([family, styles]) =>
    styles.map(style =>
      [`woff`, `woff2`].map(ext =>
        require(`../../fonts/${family}/${family}-${style}.${ext}`)
      )
    )
  )
  .flat(2)

const Layout = ({
  children,
  description = ``,
  lang = `en`,
  meta = [],
  title,
}) => {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata.description
  const defaultTitle = siteMetadata?.title

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        titleTemplate={defaultTitle ? `${defaultTitle} | %s` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      >
        {fonts.map((font, i) => (
          <link
            key={i}
            href={font}
            rel="preload"
            as="font"
            crossOrigin="anonymous"
          />
        ))}
      </Helmet>

      <main className={styles.main}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Layout
