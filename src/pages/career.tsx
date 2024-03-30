import * as React from "react"
import JobOpening from "../components/JobOpening"
import JoinSection from "../components/JoinSection"
import Career from "../components/Career"
import CareerImage from "../components/CareerImage"
import Apply from "../components/Apply"
import { type PageProps, graphql } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"

// Step 1: Define Types
export type CareerPageFrontmatterType = NonNullable<
Queries.CareerPageQuery["markdownRemark"]
>["frontmatter"]

// Step 2: Define your Page
const CareerPage = ({
  data,
}: PageProps<Queries.CareerPageQuery>): React.ReactElement => {
  return <CareerPageTemplate frontmatter={data.markdownRemark?.frontmatter!} />
}
export default CareerPage

// Step 3: Define your Page Template
export const CareerPageTemplate = ({
  frontmatter,
}: {
  frontmatter: CareerPageFrontmatterType
}): React.ReactElement => {
  const { career, openings, perks, applyNow } = frontmatter!

  return (
    <BaseLayout pageName="career">
      <Career {...career!} />
      <CareerImage image={career?.image!} />
      <JobOpening {...openings!} />
      <JoinSection {...perks!} />
      <Apply {...applyNow!} />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query CareerPage {
    markdownRemark(frontmatter: { templateKey: { eq: "career-page" } }) {
      id
      frontmatter {
        templateKey
        career {
          kicker
          titleUp
          titleDown
          titleHighlight
          description
          image
        }
        openings {
          titleHighlight
          title
          opening {
            title
            description
            link
          }
        }
        perks {
          title
          titleHighlight
          description
          image
          perk {
            title
            description
          }
        }
        applyNow {
          titleUp
          titleDown
          titleHighlight
          heading
          description
          email
          button {
            buttonText
            icon
          }
        }
      }
    }
  }
`
