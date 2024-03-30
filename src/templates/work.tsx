import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"
import WorkOverview from "../components/WorkOverview"
import WorkDetail from "../components/WorkDetail"
import Achievement from "../components/Achievement"
import Result from "../components/Result"
import MoreProject from "../components/MoreProject"
import SampleWork from "../components/SampleWork"

// Step 1: Define Types
type WorkPageType = NonNullable<Queries.WorkPageByIdQuery>["work"]

export type WorkListType = NonNullable<
NonNullable<Queries.WorkPageByIdQuery>["works"]
>["edges"]

export type WorkPageFrontmatterType = NonNullable<WorkPageType>["frontmatter"]

// Step 2: Define your Page
const WorkPage = ({
  data,
}: PageProps<Queries.WorkPageByIdQuery>): React.ReactElement => {
  return <WorkPageTemplate work={data.work} list={data.works.edges} />
}
export default WorkPage

// Step 3: Define your Page Template
export const WorkPageTemplate = ({
  work,
  list,
}: {
  work: WorkPageType
  list: WorkListType
}): React.ReactElement => {
  const {
    title,
    description,
    heroImage,
    details,
    achievemnets,
    sampleWork,
    result,
  } = work?.frontmatter!
  const {
    title: introTitle,
    description: introDescription,
    image: introImage,
  } = work?.frontmatter?.introduction!
  return (
    <BaseLayout pageName="work">
      <WorkOverview
        title={title!}
        description={description!}
        heroImage={heroImage!}
        introTitle={introTitle!}
        introDescription={introDescription!}
        introImage={introImage!}
      />
      <WorkDetail {...details!} />
      <Achievement {...achievemnets!} />
      <SampleWork {...sampleWork!} />
      <Result {...result!} />
      <MoreProject data={list} />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query WorkPageById($id: String!) {
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
    work: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        templateKey
        description
        heroImage
        introduction {
          title
          description
          image
        }
        image
        details {
          mobImage
          webImage
        }
        achievemnets {
          title
          description
        }
        sampleWork {
          image2
          image1
          webImage
          mobImage
        }
        result {
          description
          title
        }
      }
    }
  }
`
