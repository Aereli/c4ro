import { useState, useEffect } from "react"

export default function GetFeaturedData() {

  const [data, setData] = useState()
  const [posts, setPosts] = useState()
  const [authors, setAuthors] = useState()
  const [category, setCategory] = useState()

  useEffect(() => {

    fetch(process.env.GATSBY_SANITY_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
                posts: allPost{
                 _id
                 title
                 bodyRaw
                 publishedAt
                 mainImage {
                   asset{
                     url
                   }
                 }
               }
                 author: allAuthor {
                   _id
                   bioRaw
                   image{
                     asset{
                       url
                     }
                   }
                 }
                 category:allCategory {
                   _id
                   title
                   description
                 } 
               }
               `,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data)
        setPosts(res.data.posts)
        setAuthors(res.data.author)
        setCategory(res.data.category)
      }).catch(err => console.log(err))
  }, [])

  return {
    posts, authors, category, data
  }
}