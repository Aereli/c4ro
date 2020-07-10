import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./home.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "LOGO1.png" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="logo"
      imgStyle={{ objectFit: "contain", height: `80vh`, width: `100vw` }}
    />
  )
}

export default Image
