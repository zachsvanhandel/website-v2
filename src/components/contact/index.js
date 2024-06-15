import React from "react"

import { useEntered, useSiteMetadata } from "../../hooks"

import styles from "./index.module.scss"

const Contact = () => {
  const [ref, entered] = useEntered()
  const { email } = useSiteMetadata()

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`
          ${styles.content}
          ${!entered ? styles.paused : ``}
        `}
      >
        <h2 className={styles.headline}>Always available</h2>

        <p className={styles.copy}>
          Want to chat about an opportunity or say hello? Feel free to reach out
          via social media or email.
        </p>

        <a
          className={styles.link}
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Contact
