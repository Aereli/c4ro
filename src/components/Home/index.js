import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

const HomeSection = ({ data }) => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.inner} >
        {data.map(item => (
          <h1 className={styles.title} key={item.id}>
            <Link to={`/project/${item.slug}`}>{item.title}</Link>
          </h1>
        ))}
      </div>
    </div>
  )
}

export default HomeSection
