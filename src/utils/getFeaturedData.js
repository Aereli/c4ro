import { useState, useEffect } from "react"

export default function GetFeaturedData() {
  const [data, setData] = useState()

  console.log(process.env.GATSBY_SANITY_GRAPHQL)

  useEffect(() => {
    fetch(process.env.GATSBY_SANITY_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            allFeatured{
              _id
              title
              image {
                asset {
                  url
                }
              }
            }
          }
        `,
      }),
    })
      // .then(res => console.log(res))
      .then(res => res.json())
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return data
}
