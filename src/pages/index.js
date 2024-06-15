import React, { useState } from "react"

import About from "../components/about"
import Contact from "../components/contact"
import Divider from "../components/divider"
import Experience from "../components/experience"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Loader from "../components/loader"
import Skills from "../components/skills"

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false)

  const onLoadComplete = () => {
    setLoaded(true)
  }

  return (
    <Layout title="Software Engineer">
      {!loaded ? (
        <Loader onLoadComplete={onLoadComplete} />
      ) : (
        <>
          <Hero />
          <Divider />
          <About />
          <Divider flipped />
          <Experience />
          <Divider />
          <Skills />
          <Divider flipped />
          <Contact />
          <Divider />
          <Footer />
        </>
      )}
    </Layout>
  )
}

export default IndexPage
