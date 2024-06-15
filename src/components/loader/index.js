import React from "react"
import PropTypes from "prop-types"

import Logo from "../../icons/logo.svg"

import styles from "./index.module.scss"

const Loader = ({ onLoadComplete }) => {
  return (
    <div className={styles.logoWrapper}>
      <Logo className={styles.logo} onAnimationEnd={onLoadComplete} />
    </div>
  )
}

Loader.propTypes = {
  onLoadComplete: PropTypes.func,
}

export default Loader
