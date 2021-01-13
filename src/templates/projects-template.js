import React from "react"
import Layout from "../components/Layout"
import styles from "./styles.module.scss"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const ProjectsTemplate = ({ data }) => {
  const splinter = data.projectsJson

  return (
    <Layout>
      <SEO title={"Splinter"} />
      <div>
        <h1 className={styles.title}>{splinter.title}</h1>
        test
        <h2>{splinter.description}</h2>
      </div>
    </Layout>
  )
}

export default ProjectsTemplate

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      slug
      title
      description
      images {
        id
        url
      }
    }
  }
`
