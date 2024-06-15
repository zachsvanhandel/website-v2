import React from "react"

import { useSiteMetadata } from "../../hooks"

import styles from "./index.module.scss"

const Social = () => {
  const { socialLinks } = useSiteMetadata()

  return (
    <ul className={styles.socialLinkList}>
      {socialLinks.map((link, i) => (
        <li className={styles.socialLinkListItem} key={i}>
          <a
            className={styles.socialLink}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
