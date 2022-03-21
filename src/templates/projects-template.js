import React from "react"
import Layout from "../components/Layout"
import styles from "./styles.module.scss"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const ProjectsTemplate = ({ data }) => {
  const splinter = data.projectsJson

  return (
    <Layout>
      <SEO title={`Interior | ${splinter.title}`} />
      <div className={styles.container}>

        <Link to="/interior"> ← Back</Link>

        <h1 className={styles.title}>{splinter.title}</h1>
        <h3>{splinter.description}</h3>
        {data.images.edges.map(item => ( 
          <Img key={item.node.id}fluid={item.node.childImageSharp.fluid} alt={item.node.name} />
          ))
        }
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
    }
  
  images :
    allFile(
      filter: { relativeDirectory: {eq: $slug } },
      sort: { fields: [base] }
    ) {
      edges {
        node {
          id
          name
          relativeDirectory
          childImageSharp {
            fluid (maxWidth: 3080, quality: 100){
              ...GatsbyImageSharpFluid
              # ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
  
`
