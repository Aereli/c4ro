import React from "react"
import Layout from "../components/Layout"
import styles from "./styles.module.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const ProjectsTemplate = ({ data }) => {
  const splinter = data.projectsJson

  console.log('data:',data)
  // console.log('imagessdf:', data.images.edges.map(item => item.node.childImageSharp))

  return (
    <Layout>
      <SEO title={"Splinter"} />
      <div className={styles.container}>
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
      filter: { relativeDirectory: {eq: $slug } }
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
