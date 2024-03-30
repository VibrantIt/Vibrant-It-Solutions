import * as React from "react"
import { type WorkPageFrontmatterType } from "../templates/work"

type SampleWorkProps = NonNullable<WorkPageFrontmatterType>["sampleWork"]

const SampleWork = (
  props: NonNullable<SampleWorkProps>
): React.ReactElement => (
  <div className="sw">
    <div className="sw1">
      <img src={props.webImage!} alt="" id="web-view" />
      <img src={props.mobImage!} alt="" id="mob-view" />
    </div>
    <div className="sw2">
      <img src={props.image1!} alt="" />
      <img src={props.image2!} alt="" />
    </div>
  </div>
)

export default SampleWork
