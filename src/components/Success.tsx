import * as React from "react"
import useCommon from "../hooks/useCommon"

const Success = (): React.ReactElement => {
  const { milestone } = useCommon()

  return (
    <div className="container2">
      <div className="success">
        <h2>
          <span className="head1">{milestone.indexTitleUp}</span>
          <br />
          <span className="head2">{milestone.indexTitleHighlight}</span>
        </h2>
        <div className="boxes">
          {milestone.boxes?.map((item, index) => (
            <div key={index} className="sbox">
              <h1>{item?.title}</h1>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Success
