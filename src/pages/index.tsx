import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import Hero from "../components/Hero"
import Clients from "../components/Clients"
import About from "../components/About"
import Success from "../components/Success"
import Service from "../components/Services"
import Process from "../components/Process"
import CommonLayout from "../layouts/CommonLayout"

// Step 1: Define Types
type IndexPageType = Pick<Queries.IndexPageQuery, "markdownRemark">

export type IndexPageFrontmatterType = NonNullable<
IndexPageType["markdownRemark"]
>["frontmatter"]

// Step 2: Define your Page
const IndexPage = ({
  data,
}: PageProps<Queries.IndexPageQuery>): React.ReactElement => {
  return <IndexPageTemplate frontmatter={data.markdownRemark?.frontmatter!} />
}
export default IndexPage

// Step 3: Define your Page Template
export const IndexPageTemplate = ({
  frontmatter,
}: {
  frontmatter: IndexPageFrontmatterType
}): React.ReactElement => {
  const { hero, client, about, services, process } = frontmatter!
  return (
    <CommonLayout pageName="index">
      <Hero {...hero!} />
      <Clients {...client!} />
      <About {...about!} />
      <Success />
      <Service {...services!} />
      <Process {...process!} />
    </CommonLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        hero {
          titleUp
          titleHighlight
          titleDown
          image
          description
          button {
            buttonText
            icon
          }
        }
        client {
          title
          logos {
            logo
          }
        }
        about {
          titleUp
          titleHighlight
          titleDown
          image
          description
          button {
            buttonText
            icon
          }
        }
        success {
          titleUp
          titleHighlight
          boxes {
            title
            description
          }
        }
        process {
          title
          titleHighlight
          description
          button {
            buttonText
            icon
          }
          phases {
            title
            description
          }
        }
        services {
          title
          titleHighlight
          service {
            icon
            description
            title
          }
        }
      }
    }
  }
`
