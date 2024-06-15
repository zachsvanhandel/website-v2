import React from "react"

import { useEntered } from "../../hooks"

import styles from "./index.module.scss"

const Experience = () => {
  const [ref, entered] = useEntered()

  return (
    <section className={styles.section}>
      <div
        ref={ref}
        className={`
          ${styles.content}
          ${!entered ? styles.paused : ``}
        `}
      >
        <h2 className={styles.headline}>History of success</h2>

        <p className={styles.copy}>
          Professional experience at 2 Fortune 100 companies and the 2nd largest
          university in Colorado. In addition to a 4.0 GPA in Computer Science.
        </p>

        <a className={styles.link} href="/resume.pdf" target="_blank">
          View resume
        </a>
      </div>
    </section>
  )
}

export default Experience
