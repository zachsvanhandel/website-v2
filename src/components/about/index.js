import React, { useState } from "react"

import { useEntered } from "../../hooks"

import styles from "./index.module.scss"

const About = () => {
  const [contentRef, contentEntered] = useEntered()
  const [graphicRef, graphicEntered] = useEntered()
  const [graphicLoaded, setGraphicLoaded] = useState(false)

  const onGraphicLoadComplete = () => {
    setGraphicLoaded(true)
  }

  return (
    <section className={styles.section}>
      <div ref={graphicRef} className={styles.graphic}>
        <div className={styles.circleWrapper}>
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`
                ${styles[`circle${i + 1}`]}
                ${i === 18 ? styles.filled : ``}
                ${!graphicEntered ? styles.paused : ``}
              `}
              onAnimationEnd={i === 18 ? onGraphicLoadComplete : undefined}
            />
          ))}
        </div>
      </div>

      <div
        ref={contentRef}
        className={`
          ${styles.content}
          ${!contentEntered || !graphicLoaded ? styles.paused : ``}
        `}
      >
        <h2 className={styles.headline}>One of a kind</h2>

        <p className={styles.copy}>
          A relentless worker with a love for basketball, a need for music, and
          a belief that anything is possible. Not quite like anyone else. Not
          trying to be.
        </p>
      </div>
    </section>
  )
}

export default About
