import * as React from "react"
import { type WorkPageFrontmatterType } from "../templates/work"

type WorkDetailProps = NonNullable<WorkPageFrontmatterType>["details"]

const WorkDetail = (
  props: NonNullable<WorkDetailProps>
): React.ReactElement => (
  <div className="details">
    {/* <img src="/images/work/image 13.svg" alt="" id="detail-img" />
    <img src="/images/work/image 13m.svg" alt="" id="Mdetail-img" /> */}
    <img src={props.webImage!} alt="" id="detail-img" />
    <img src={props.mobImage!} alt="" id="Mdetail-img" />
  </div>
)

export default WorkDetail
