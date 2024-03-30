import * as React from "react"
import { type BlogPageFrontmatterType } from "../templates/blog"
import { format, parseISO } from "date-fns"

type BlogOverviewProps = NonNullable<BlogPageFrontmatterType>["overview"]

const BlogOverview = (
  props: NonNullable<BlogOverviewProps>
): React.ReactElement => (
  <>
    <div className="tech-tales">
      <div className="tales">
        <h5>{props.kicker}</h5>
        <h1>
          <span className="line1">{props.titleTop}</span>
          <br />
          {!!(props.titleDown ?? "") && (
            <>
              <span className="line1">{props.titleDown}</span>
              <br />
            </>
          )}
          <span className="line2">{props.titleHighlight}</span>
        </h1>
        <p>{props.description}</p>
      </div>
    </div>
    <div className="author-detail">
      <div className="post-detail">
        <img src={props.details?.profile!} alt="" />
        <div className="written-by">
          <p>Written by</p>
          <p id="dark">{props.details?.author}</p>
        </div>
        <div id="line"></div>
        <div className="written-by">
          <p>Published</p>
          <p id="dark">
            {format(parseISO(props.details?.publishDate!), "dd MMM, yyyy")}
          </p>
        </div>
        <div id="line"></div>
        <div className="written-by">
          <p>Topics</p>
          <p id="dark">{props.details?.topic}</p>
        </div>
      </div>
    </div>

    <div className="img-container">
      <img src="/images/blog/image 2139.svg" alt="" />
    </div>
  </>
)

export default BlogOverview
