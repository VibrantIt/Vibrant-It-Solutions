import * as React from "react"
import { type AboutPageFrontmatterType } from "../pages/about"

type AboutUsProps = NonNullable<AboutPageFrontmatterType>["about"]

const AboutUs = (props: AboutUsProps): React.ReactElement => (
  <div className="inspire">
    <div className={"inspiration"}>
      <h5>{props?.kicker}</h5>
      <h1>
        <span className={"line1"}>{props?.titleUp}</span>{" "}
        <span className={"line1"}>{props?.titleDown}</span>{" "}
        <span className={"line2"}>{props?.titleHighlight}</span>
      </h1>
      <p>{props?.description}</p>
    </div>
  </div>
)

export default AboutUs
