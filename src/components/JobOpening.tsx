import * as React from "react"
import { type CareerPageFrontmatterType } from "../pages/career"

type JobOpeningProps = NonNullable<CareerPageFrontmatterType>["openings"]

const JobOpening = (props: JobOpeningProps): React.ReactElement => (
  <div className={"job-opening"}>
    <h2>
      <span className={"head2"}>{props?.title}</span>&nbsp;
      <span className={"head1"}>{props?.titleHighlight}</span>
    </h2>
    <div className={"post"}>
      {props?.opening?.map((item, i) => (
        <div key={i} className={"role"}>
          <h4>{item?.title}</h4>
          <p>{item?.description}</p>
          <a href={item?.link!}>
            <img src="/images/Career/arrow-right.svg" alt="" />
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default JobOpening
