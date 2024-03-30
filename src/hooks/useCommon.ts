import { useStaticQuery, graphql } from "gatsby"

type CommonType = {
  header: Queries.CommonJsonHeader
  footer: Queries.CommonJsonFooter
  solution: Queries.CommonJsonSolution
  testimonials: NonNullable<Queries.CommonJsonTestimonialsTestimonial[]>
  services: string[]
  milestone: Queries.CommonJsonMilestone
}

const useCommon = (): CommonType => {
  const { header, footer, solution, testimonials, services, milestone } =
    useStaticQuery(graphql`
      query commonJson {
        services: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "service-page" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
        header: commonJson(_xtype: { eq: "header" }) {
          node: header {
            Weblogo
            Moblogo
            DropDownImage
            navItems {
              item
              link
            }
          }
        }
        footer: commonJson(_xtype: { eq: "footer" }) {
          node: footer {
            logo
            address
            columns {
              heading
              elements {
                text
                link
              }
            }
            social {
              icon
              link
            }
          }
        }
        solution: commonJson(_xtype: { eq: "solution" }) {
          node: solution {
            title
            titleHighlight
            image
            button {
              buttonText
              icon
            }
            description
          }
        }
        testimonials: commonJson(_xtype: { eq: "testimonial" }) {
          node: testimonials {
            testimonial {
              testimony
              name
              bio
              image
            }
          }
        }
        milestone: commonJson(_xtype: { eq: "milestone" }) {
          node: milestone {
            indexTitleUp
            indexTitleHighlight
            title
            titleHighlight
            description
            boxes {
              title
              description
            }
          }
        }
      }
    `)
  return {
    header: header.node,
    footer: footer.node,
    testimonials: testimonials.node.testimonial,
    solution: solution.node,
    services: services.edges.map((item: any) => item.node.frontmatter.title),
    milestone: milestone.node,
  }
}

export default useCommon
