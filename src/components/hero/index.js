import React from "react"

import { useSiteMetadata } from "../../hooks"

import Social from "../social"

import styles from "./index.module.scss"

const Hero = () => {
  const { email } = useSiteMetadata()

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Zach Van Handel</h1>

        <p className={styles.copy}>
          Passionate. Innovative. Meticulous. And always improving. Looking for
          a software engineer in the Denver area? You've found the one.
        </p>

        <div className={styles.buttonWrapper}>
          <a className={styles.button} href="/resume.pdf" target="_blank">
            View resume
          </a>

          <a
            className={styles.button}
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch
          </a>
        </div>

        <div className={styles.socialWrapper}>
          <Social />
        </div>
      </div>
    </section>
  )
}

export default Hero
