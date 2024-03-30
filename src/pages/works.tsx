import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"
import OurWork from "../components/OurWork"
import useCommon from "../hooks/useCommon"
import Solution from "../components/Solution"

// Step 1: Define Types
export type WorkListType = NonNullable<
NonNullable<Queries.WorkPageQuery>["allMarkdownRemark"]
>["edges"]

// Step 2: Define your Page
const WorkPage = ({
  data,
}: PageProps<Queries.WorkPageQuery>): React.ReactElement => {
  return <WorkPageTemplate list={data.allMarkdownRemark.edges} />
}
export default WorkPage

// Step 3: Define your Page Template
export const WorkPageTemplate = ({
  list,
}: {
  list: WorkListType
}): React.ReactElement => {
  const { solution } = useCommon()

  return (
    <BaseLayout pageName={"works"}>
      <OurWork list={list} />
      <Solution {...solution} />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query WorkPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "work-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            thumbnail
          }
        }
      }
    }
  }
`
