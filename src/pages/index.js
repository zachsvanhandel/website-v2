import React, { useState } from "react"

import Layout from "../components/layout"
import Load from "../components/load"
import Hero from "../components/sections/hero"
import SEO from "../components/seo"

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false)

  const onLoadComplete = () => {
    setLoaded(true)
  }

  return (
    <Layout>
      <SEO title="Software Engineer" />

      {!loaded ? <Load onLoadComplete={onLoadComplete} /> : <Hero />}
    </Layout>
  )
}

export default IndexPage
