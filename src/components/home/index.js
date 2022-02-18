import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

const HomeSection = ({ data }) => {
  return (
    <div className={styles.container} id="splinterSection">
      <div className={styles.inner} >
        {data.map(item => (
          <h2 key={item.id}>
            <Link to={`/project/${item.slug}`}>{item.title}</Link>
          </h2>
        ))}
      </div>
    </div>
  )
}

export default HomeSection
