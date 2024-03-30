import React, { useEffect, useState } from "react"
import { type WorkListType } from "../pages/works"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const OurWork = ({ list }: { list: WorkListType }): React.ReactElement => {
  const [listItem, setListItem] = useState<WorkListType>([])

  useEffect(() => {
    setListItem(list.slice(0, 6))
  }, [])

  return (
    <>
      <div className="work">
        <h1>
          <span className="line1">Our</span>{" "}
          <span className="line2">Works</span>
        </h1>
      </div>

      <div className="our-works">
        <div className="project">
          {listItem.map((item, i) => (
            <div className="recent-projects" key={`work-${i}`}>
              <LazyLoadImage
                placeholderSrc={item.node.frontmatter?.thumbnail!}
                src={item.node.frontmatter?.thumbnail!}
                effect="blur"
                alt=""
              />
              <h3>{item.node.frontmatter?.title}</h3>
              <p className="workP">
                {item.node.frontmatter?.description}{" "}
                <span className="view-project">
                  <a
                    key={`work-${i}`}
                    href={`/works/${item.node.frontmatter?.title!.toLowerCase()}`}
                  >
                    View Project{" "}
                    <img src="/images/work/arrow-right.svg" alt="" />
                  </a>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="view-moreBTN">
        <a
          href="#"
          className="button"
          onClick={() => {
            setListItem(list)
          }}
        >
          View More Projects
        </a>
      </div>
    </>
  )
}

export default OurWork
