import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./styles.module.scss"

const HomeSection = () => {
  const { allData } = useStaticQuery(graphql`
    query {
      allData: allDataJson {
        splinter {
          seminar {
            title
            image
            id
            description
            slug
          }
        }
      }
    }
  `)

  const seminar = allData.splinter.seminar
  console.log(seminar)

  return (
    <div className={styles.container}>
      <h1>Splinter</h1>
      {seminar.map(item => (
        <h2 key={item.id}>
          <Link to={`/seminars/${item.slug}`}>{item.title}</Link>
        </h2>
      ))}
    </div>
  )
}

export default HomeSection
