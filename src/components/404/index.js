import React from "react"
import { Link } from "gatsby"

import styles from "./index.module.scss"

const NotFound = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.headline}>404</h2>

        <p className={styles.copy}>That page could not be found.</p>

        <Link className={styles.link} to="/">
          Return to home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
