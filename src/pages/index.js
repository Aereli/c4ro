import React from "react"

import Layout from "../components/Layout"
import HomeSymbol from "../components/Home/symbol"
import SEO from "../components/seo"
import Footer from "../components/Footer/index"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      {/* <HomeLogo /> */}
      <HomeSymbol />
      <Footer />
      {/* <HomeSection data={data.allProjectsJson.nodes} /> */}
    </Layout>
  )
}
export default IndexPage
