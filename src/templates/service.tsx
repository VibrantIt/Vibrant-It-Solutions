import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import SoftwareSolution from "../components/SoftwareSolution"
import Project from "../components/Projects"
import Expertise from "../components/Expertise"
import CommonLayout from "../layouts/CommonLayout"

// Step 1: Define Types
type ServicePageType = NonNullable<Queries.ServicePageByIdQuery>["service"]

type ServiceWorkType = NonNullable<Queries.ServicePageByIdQuery>["works"]

export type ServicePageFrontmatterType =
  NonNullable<ServicePageType>["frontmatter"]

export type ServiceWorkEdgeType = NonNullable<ServiceWorkType>["edges"]

// Step 2: Define your Page
const ServicePage = ({
  data,
}: PageProps<Queries.ServicePageByIdQuery>): React.ReactElement => {
  return (
    <ServicePageTemplate service={data.service} workList={data.works.edges} />
  )
}
export default ServicePage

// Step 3: Define your Page Template
export const ServicePageTemplate = ({
  service,
  workList,
}: {
  service: ServicePageType
  workList: ServiceWorkEdgeType
}): React.ReactElement => {
  const { hero, expertise, project } = service?.frontmatter!
  const { titleBefore, titleHighlight, titleAfter } = project!
  return (
    <CommonLayout pageName="service">
      <SoftwareSolution {...hero!} />
      <Expertise {...expertise!} />
      <Project
        titleBefore={titleBefore!}
        titleHighlight={titleHighlight!}
        titleAfter={titleAfter!}
        workList={workList}
      />
    </CommonLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query ServicePageById($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        hero {
          titleHighlight
          titleBefore
          titleAfter
          image
          description
          button {
            buttonText
            icon
          }
        }
        expertise {
          titleBefore
          titleHighlight
          titleAfter
          expertises {
            title
            description
          }
        }
        project {
          titleBefore
          titleHighlight
          titleAfter
          projects {
            title
            description
            image
          }
        }
      }
    }
    works: allMarkdownRemark(
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
