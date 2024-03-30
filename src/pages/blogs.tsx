import * as React from "react"
import { type PageProps, graphql } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"
import BlogsIntro from "../components/BlogsIntro"
import BlogCarousel from "../components/BlogCarousel"
import BlogsHighlight from "../components/BlogsHighlight"
import BlogsFilter from "../components/BlogsFilter"
import NewsLetter from "../components/NewsLetter"

// Step 1: Define Types

export type BlogListType = NonNullable<
NonNullable<Queries.BlogsPageQuery>["blogs"]
>["edges"]

export type BlogsFrontmatterType = NonNullable<
NonNullable<Queries.BlogsPageQuery>["blogsList"]
>["frontmatter"]

// Step 2: Define your Page
const BlogsPage = ({
  data,
}: PageProps<Queries.BlogsPageQuery>): React.ReactElement => {
  return (
    <BlogPageTemplate
      data={data.blogs.edges}
      frontmatter={data.blogsList?.frontmatter!}
    />
  )
}

export default BlogsPage

// Step 3: Define your Page Template
export const BlogPageTemplate = ({
  data,
  frontmatter,
}: {
  data: BlogListType
  frontmatter: BlogsFrontmatterType
}): React.ReactElement => {
  return (
    <BaseLayout pageName={"blogs"}>
      <BlogsIntro {...frontmatter!} />
      <BlogCarousel data={data} />
      <BlogsHighlight data={data} />
      <BlogsFilter data={data} />
      <NewsLetter />
    </BaseLayout>
  )
}

// Step 4: Define your Page Query
export const pageQuery = graphql`
  query BlogsPage {
    blogs: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            featured
            tag
            thumbnail
            overview {
              kicker
              titleTop
              titleDown
              titleHighlight
              description
              image
              details {
                publishDate
                author
                topic
                profile
              }
            }
          }
        }
      }
    }
    blogsList: markdownRemark(
      frontmatter: { templateKey: { eq: "blog-listing-page" } }
    ) {
      id
      frontmatter {
        templateKey
        kicker
        title
        titleHighlight
        description
      }
    }
  }
`
