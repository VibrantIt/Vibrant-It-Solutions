import * as React from "react"
import { type WorkListType } from "../templates/work"
import { useLocation } from "@reach/router"

type MoreProjectProps = NonNullable<WorkListType>

const MoreProject = ({
  data,
}: {
  data: NonNullable<MoreProjectProps>
}): React.ReactElement => {
  const location = useLocation()

  return (
    <div className="more-projects">
      <h2>
        <span className="head2">More</span>&nbsp;
        <span className="head1">Projects</span>
      </h2>
      <div className="project">
        {data
          ?.filter(
            (item) =>
              `/works/${item.node.frontmatter?.title?.toLowerCase()}/` !==
              location.pathname
          )
          .map((item, i) => (
            <a
              key={`wrok-${i}`}
              href={`/works/${item.node.frontmatter?.title!.toLowerCase()}`}
            >
              <div className="recent-projects">
                <img src={item.node.frontmatter?.thumbnail!} alt="" />
                <h3>
                  {item.node.frontmatter?.title}
                  <img src="/images/work/arrow-right.svg" alt="" />
                </h3>
                <p>{item.node.frontmatter?.description}</p>
              </div>
            </a>
          ))}
      </div>
    </div>
  )
}

export default MoreProject
