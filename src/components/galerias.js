import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox1"
const Galerias = () => (
  <StaticQuery
    query={graphql`
      query {
        galeriaImages: allFile(filter: { sourceInstanceName: { eq: "galerias" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox galeriaImages={data.galeriaImages.edges} />}
  />
)
export default Galerias