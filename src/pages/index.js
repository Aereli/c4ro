import React from "react"

import Layout from "../components/layout"
import HomeLogo from "../components/home/image"
import HomeSection from "../components/home"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeLogo />
    <HomeSection />
  </Layout>
)

export default IndexPage
