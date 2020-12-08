import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./styles.module.scss"

const HomeLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "LOGO1.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.image}>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="logo"
        imgStyle={{
          objectFit: "contain",
        }}
      />
    </div>
  )
}

export default HomeLogo
