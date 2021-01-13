import React from "react"

import Layout from "../components/Layout"
import HomeLogo from "../components/Home/image"
import HomeSection from "../components/Home"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          slug
          title
          id
          description
          images {
            id
            url
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <HomeLogo />
      <HomeSection data={data.allProjectsJson.nodes} />
    </Layout>
  )
}
export default IndexPage
