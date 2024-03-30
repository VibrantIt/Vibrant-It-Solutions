import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = (): { title: string, description: string } => {
  const { site } = useStaticQuery(graphql`
    query SITE_METADATA_QUERY {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  return site.siteMetadata
}

export default useSiteMetadata
