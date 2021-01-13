/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from "path"

// Splinters
async function splinterPages({ graphql, actions }) {
  const { data } = await graphql(`
    {
      allProjectsJson {
        nodes {
          slug
        }
      }
    }
  `)
  // console.log("nodesss:", data.allHomepageJson.edges[0].node)
  data.allProjectsJson.nodes.forEach(project => {
    actions.createPage({
      path: `/project/${project.slug}`,
      component: path.resolve("./src/templates/projects-template.js"),
      context: {
        slug: project.slug,
      },
    })
  })
}

export async function createPages(params) {
  await Promise.all([splinterPages(params)])
}
