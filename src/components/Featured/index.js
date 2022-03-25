import React from "react"
import GetFeaturedData from "../../utils/getFeaturedData"
import styles from "./styles.module.scss"

const Featured = () => {
  const data = GetFeaturedData()

  return (
    <div className={styles.container}>
      {!data ? 
        <p>Loading</p>
       : 
        <div>
          <h1>Featured</h1>
          {data.allFeatured.map(item => (
            <div key={item._id}>
              <p>{item.title}</p>
              <img src={item.image.asset.url} alt={item.title} />
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Featured
