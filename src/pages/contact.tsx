import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import ContactForm from "../components/ContactForm"
import BaseLayout from "../layouts/BaseLayout"

// Step 1: Define Types
export type ContactPageFrontmatterType = NonNullable<
Queries.ContactPageQuery["markdownRemark"]
>["frontmatter"]

// Step 2: Define your Page
const ContactPage = ({
  data,
}: PageProps<Queries.ContactPageQuery>): React.ReactElement => {
  return <ContactPageTemplate frontmatter={data.markdownRemark?.frontmatter!} />
}
export default ContactPage

// Step 3: Define your Page Template
export const ContactPageTemplate = ({
  frontmatter,
}: {
  frontmatter: ContactPageFrontmatterType
}): React.ReactElement => {
  return (
    <BaseLayout pageName="contact">
      <ContactForm {...frontmatter!} />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      id
      frontmatter {
        templateKey
        kicker
        title
        titleHighlight
        description
        image
        button {
          buttonText
          icon
        }
      }
    }
  }
`
