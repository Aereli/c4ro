import React from 'react'
import GetFeaturedData from '../utils/getFeaturedData'

const Featured = () => {
    
    const data = GetFeaturedData()

  
  return (
    <>
    <h1>Featured /Blog/ Thoughts</h1>
      {/* {
        data.data && data.data.posts.map((post, i) => 
          <div>
            <div style={{display: 'flex', float: 'right'}}>
            <p>{authors[i].bioRaw[0].children[0].text}</p>
            <img style={{ width: '50px'}} src={authors[i].image.asset.url}/>
            </div>
            <h1>{post.title}</h1>
            <p>{post.bodyRaw[0].children[0].text}</p>
            <img src={post.mainImage.asset.url}/> 
          </div>
          )
      } */}
      </>
  )
}

export default Featured