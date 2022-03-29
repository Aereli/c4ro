import React, { useEffect, useState } from "react"
import GetFeaturedData from "../../utils/getFeaturedData"
import styles from "./styles.module.scss"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const Featured = () => {
  const data = GetFeaturedData()

  const [photoIndex, setPhotoIndex] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  const allImages = data && data.allFeatured.map(item => item.image.asset.url)

  useEffect(() => {
    const scrollContainer = document.querySelector("#test")
    if (data) {
      scrollContainer.addEventListener("wheel", evt => {
        evt.preventDefault()
        scrollContainer.scrollLeft += evt.deltaY
      })
    }
  }, [data])

  function imageHandler(item) {
    setPhotoIndex(item)
    setIsOpen(true)
  }

  return (
    <div className={styles.container}>
      <h1>Featured</h1>
      {!data ? (
        <p>Loading</p>
      ) : (
        <div id="test" className={styles.imagesContainer}>
          {data.allFeatured.map((item, id) => (
            <div key={item._id}>
              {/* <p>{item.title}</p> */}
              <img
                src={item.image.asset.url}
                alt={item.title}
                title={item.title}
                onClick={() => imageHandler(id)}
              />
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={
            allImages[(photoIndex + allImages.length - 1) % allImages.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + allImages.length - 1) % allImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allImages.length)
          }
        ></Lightbox>
      )}
    </div>
  )
}

export default Featured
