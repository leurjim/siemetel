import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Towers = () => (
  <StaticQuery
    query={graphql`
      query {
        towerImages: allFile(filter: { sourceInstanceName: { eq: "towers" } }) {
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
    render={data => <Lightbox towerImages={data.towerImages.edges} />}
  />
)
export default Towers