import { graphql, useStaticQuery } from "gatsby"

export default function GetTestData() {
  
    const data = useStaticQuery(graphql`
  
  query MyQuery {
    allSanityFeatured {
      edges {
        node {
          id
          image {
            asset {
              url
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
  `)
    return data
  }
  
  
  