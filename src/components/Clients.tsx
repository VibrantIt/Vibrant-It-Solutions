import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"

type ClientsProps = NonNullable<IndexPageFrontmatterType>["client"]

const Clients = (props: ClientsProps): React.ReactElement => (
  <>
    <div className="clients">
      <p>{props?.title}</p>
    </div>
    <div className="clogo">
      <div className="clogo-slide">
        {props?.logos?.map((item, index) => (
          <div key={index} className="client-logo" id={`cl${index + 1}`}>
            <img src={item?.logo!} alt="" />
          </div>
        ))}
      </div>
      <div className="clogo-slide">
        {props?.logos?.map((item, index) => (
          <div key={index} className="client-logo" id={`cl${index + 1}`}>
            <img src={item?.logo!} alt="" />
          </div>
        ))}
      </div>
    </div>
  </>
)

export default Clients
