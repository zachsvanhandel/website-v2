import React from "react"

import { useEntered } from "../../hooks"

import Social from "../social"

import styles from "./index.module.scss"

const Footer = () => {
  const [ref, entered] = useEntered()

  return (
    <footer className={styles.footer}>
      <div
        ref={ref}
        className={`
          ${styles.socialWrapper}
          ${!entered ? styles.paused : ``}
        `}
      >
        <Social />
      </div>
    </footer>
  )
}

export default Footer
