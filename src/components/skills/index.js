import React, { useState } from "react"

import { useEntered, useSiteMetadata } from "../../hooks"

import styles from "./index.module.scss"

// todo: ordering
const icons = [
  `bootstrap`,
  `confluence`,
  `docker`,
  `git`,
  `github`,
  `java`,
  `javascript`,
  `jira`,
  `node-dot-js`,
  `pandas`,
  `python`,
  `react`,
  `redux`,
  `sass`,
  `slack`,
  `spring`,
].map(i => require(`../../icons/${i}.svg`))

const Skills = () => {
  const { socialLinks } = useSiteMetadata()
  const gitHubLink = socialLinks.find(
    link => link.text.toLowerCase() === `github`
  )

  const [contentRef, contentEntered] = useEntered()
  const [graphicRef, graphicEntered] = useEntered()
  const [contentLoaded, setContentLoaded] = useState(false)

  const onContentLoadComplete = () => {
    setContentLoaded(true)
  }

  return (
    <section className={styles.section}>
      <div
        ref={contentRef}
        className={`
          ${styles.content}
          ${!contentEntered ? styles.paused : ``}
        `}
        onAnimationEnd={onContentLoadComplete}
      >
        <h2 className={styles.headline}>Diverse skill set</h2>

        <p className={styles.copy}>
          Extensive knowledge of databases, UI frameworks, and everything in
          between. Paired with a knack for learning new technologies quickly and
          effectively.
        </p>

        <a
          className={styles.link}
          href={`${gitHubLink.url}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore projects
        </a>
      </div>

      <div ref={graphicRef} className={styles.graphic}>
        <div className={styles.iconWrapper}>
          {icons.map((Icon, i) => (
            <Icon
              key={i}
              className={`
                ${styles[`icon${i + 1}`]}
                ${!graphicEntered || !contentLoaded ? styles.paused : ``}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
