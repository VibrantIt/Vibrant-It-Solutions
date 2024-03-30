import * as React from "react"
import TandC from "../components/TandC"
import { type PageProps, graphql } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"

// Step 1: Define Types
export type TermsConditionsPageFrontmatterType = NonNullable<
Queries.TermsConditionsPageQuery["markdownRemark"]
>["frontmatter"]

export type TermsConditionsPageBodyType = NonNullable<
Queries.TermsConditionsPageQuery["markdownRemark"]
>["html"]

// Step 2: Define your Page
const TermsConditionsPage = ({
  data,
}: PageProps<Queries.TermsConditionsPageQuery>): React.ReactElement => {
  return (
    <TermsConditionsPageTemplate
      frontmatter={data.markdownRemark?.frontmatter!}
      body={data.markdownRemark?.html!}
    />
  )
}
export default TermsConditionsPage

// Step 3: Define your Page Template
export const TermsConditionsPageTemplate = ({
  frontmatter,
  body,
}: {
  frontmatter: TermsConditionsPageFrontmatterType
  body: TermsConditionsPageBodyType
}): React.ReactElement => {
  const { terms_Conditions } = frontmatter!
  return (
    <BaseLayout pageName="terms-and-conditions">
      <TandC {...terms_Conditions!} body={body!} />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query TermsConditionsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "tandc-page" } }) {
      id
      html
      frontmatter {
        title
        terms_Conditions {
          kicker
          title
          titleHighlight
          lastUpdate
        }
      }
    }
  }
`
