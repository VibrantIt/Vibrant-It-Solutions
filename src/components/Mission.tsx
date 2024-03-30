import * as React from "react"
import { type AboutPageFrontmatterType } from "../pages/about"

type MissionProps = NonNullable<AboutPageFrontmatterType>["mission"]

const Mission = (props: NonNullable<MissionProps>): React.ReactElement => (
  <div className={"our-mission"}>
    <h2>{props.title}</h2>
    <p>
      {props.description?.split("\n").map(
        (text, i) =>
          text || (
            <div key={`br-mission-${i}`}>
              <br />
            </div>
          )
      )}
    </p>
  </div>
)

export default Mission
