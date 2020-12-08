/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from "path"

// Splinters
async function splinterPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allDataJson {
        splinter {
          seminar {
            slug
          }
        }
      }
    }
  `)
  console.log(data.allDataJson.splinter)
  data.allDataJson.splinter.seminar.forEach(seminar => {
    actions.createPage({
      path: `/seminars/${seminar.slug}`,
      component: path.resolve("./src/templates/seminar-template.js"),
    })
  })
}

export async function createPages(params) {
  await Promise.all([splinterPages(params)])
}
