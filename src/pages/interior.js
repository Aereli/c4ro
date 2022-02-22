import React from "react"
import HomeSection from "../components/Home"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"


const Interior = () => {
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
      <SEO title="Interior" />
      <HomeSection data={data.allProjectsJson.nodes} />
    </Layout>
  )
}

export default Interior
