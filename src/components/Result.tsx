import * as React from "react"
import { type WorkPageFrontmatterType } from "../templates/work"

type ResultProps = NonNullable<WorkPageFrontmatterType>["result"]

const Result = (props: NonNullable<ResultProps>): React.ReactElement => (
  <div className="result">
    <div className="intro">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </div>
)

export default Result
