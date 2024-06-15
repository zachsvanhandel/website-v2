import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.scss"

// todo: still issues with blank space between sections - should just use CSS instead of SVG? (now using CSS)
const Divider = ({ flipped }) => {
  return (
    <div
      className={`
        ${styles.divider}
        ${flipped ? styles.flipped : ``}
      `}
    ></div>
  )
}

Divider.propTypes = {
  flipped: PropTypes.bool,
}

export default Divider
