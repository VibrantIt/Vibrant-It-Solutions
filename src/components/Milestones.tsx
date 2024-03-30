import * as React from "react"
import useCommon from "../hooks/useCommon"

const Milestones = (): React.ReactElement => {
  const { milestone } = useCommon()
  return (
    <div className={"about-milestones"}>
      <h2>
        <span className={"head1"}>{milestone.title}</span>
        <span className={"head2"}>{milestone.titleHighlight}</span>
      </h2>
      <p>{milestone.description}</p>
      <div className={"about-boxes"}>
        {milestone.boxes?.map((item, index) => (
          <div key={index} className={"sbox"} id={index === 0 ? "sbox1" : ""}>
            <h1>{item?.title}</h1>
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Milestones

/* <div className={"sbox"} id={"sbox1"}>
          <h1>40+</h1>
          <p>Employees</p>
        </div>
        <div className={"sbox"}>
          <h1>12</h1>
          <p>Years in IT</p>
        </div>
        <div className={"sbox"}>
          <h1>20+</h1>
          <p>Mobile Apps</p>
        </div>
        <div className={"sbox"}>
          <h1>350+</h1>
          <p>Success Stories</p>
        </div> */
