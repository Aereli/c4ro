import React from 'react'
import GetFeaturedData from '../utils/getFeaturedData'

const Featured = () => {
    
    const {authors, posts, category} = GetFeaturedData()
  console.log(posts, authors, category)

  
  return (
    <div>Featured</div>
  )
}

export default Featured