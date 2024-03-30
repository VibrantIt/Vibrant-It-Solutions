import * as React from "react"
import { type CareerPageFrontmatterType } from "../pages/career"

type CareerProps = NonNullable<CareerPageFrontmatterType>["career"]

const Career = (props: CareerProps): React.ReactElement => (
  <div className={"inspire"}>
    <div className={"inspiration"}>
      <h5>{props?.kicker}</h5>
      <h1>
        <span className={"line1"}>{props?.titleUp}</span>
        <br />
        <span className={"line1"}>{props?.titleDown}</span>&nbsp;
        <span className={"line2"}>{props?.titleHighlight}</span>
      </h1>
      <p>{props?.description}</p>
    </div>
  </div>
)

export default Career
