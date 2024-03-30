import * as React from "react"
import { type BlogsFrontmatterType } from "../pages/blogs"

type BlogsIntroProps = NonNullable<BlogsFrontmatterType>

const BlogsIntro = (props: BlogsIntroProps): React.ReactElement => (
  <div className="blogs-tech-tales">
    <div className="blogs-tales">
      <h5>{props.kicker}</h5>
      <h1>
        <span className="line1">{props.title}</span>
        <br />
        <span className="line2">{props.titleHighlight}</span>
      </h1>
      <p>{props.description}</p>
    </div>
  </div>
)

export default BlogsIntro
