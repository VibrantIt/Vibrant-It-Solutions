import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import AboutUs from "../components/AboutUs"
import AboutImage from "../components/AboutImage"
import Mission from "../components/Mission"
import Milestones from "../components/Milestones"
import CommonLayout from "../layouts/CommonLayout"

// Step 1: Define Types
export type AboutPageFrontmatterType = NonNullable<
Queries.AboutPageQuery["markdownRemark"]
>["frontmatter"]
// Step 2: Define your Page
const AboutPage = ({
  data,
}: PageProps<Queries.AboutPageQuery>): React.ReactElement => {
  return <AboutPageTemplate frontmatter={data.markdownRemark?.frontmatter!} />
}
export default AboutPage

// Step 3: Define your Page Template
export const AboutPageTemplate = ({
  frontmatter,
}: {
  frontmatter: AboutPageFrontmatterType
}): React.ReactElement => {
  const { about, aboutCollage, mission } = frontmatter!

  return (
    <CommonLayout pageName={"about"}>
      <AboutUs {...about!} />
      <AboutImage {...aboutCollage!} />
      <Mission {...mission!} />
      <Milestones />
    </CommonLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      id
      frontmatter {
        templateKey
        about {
          kicker
          titleUp
          titleDown
          titleHighlight
          description
        }
        aboutCollage {
          images {
            image
          }
        }
        mission {
          title
          description
        }
      }
    }
  }
`
