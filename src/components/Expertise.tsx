import React from "react"
import { type ServicePageFrontmatterType } from "../templates/service"

type ExpertiseProp = NonNullable<ServicePageFrontmatterType>["expertise"]

const Expertise = (props: NonNullable<ExpertiseProp>): React.ReactElement => (
  <div className={"section"}>
    <div className={"left-section"}>
      <h2>
        {props.titleBefore}{" "}
        <span className={"line2"}>{props.titleHighlight}</span>&nbsp;
        {props.titleAfter}
      </h2>
    </div>

    <div className={"right-section"}>
      {props.expertises?.map((item, index) => (
        <div key={index} className={"exp"}>
          <h3 className={"subheading"}>{item?.title}</h3>
          <p className={"paragraph"}>{item?.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default Expertise
