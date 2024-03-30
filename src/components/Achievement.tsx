import * as React from "react"
import { type WorkPageFrontmatterType } from "../templates/work"

type AchievementProps = NonNullable<WorkPageFrontmatterType>["achievemnets"]

const Achievement = (
  props: NonNullable<AchievementProps>
): React.ReactElement => (
  <div className="achievement">
    <div className="intro">
      <h2>{props.title}</h2>
      {/* <p>
        Tuple is an ambitious IT consultancy firm that has made it their mission
        to stay up to date with. <br />
        All latest trending developments within the world of information
        technology and apply and share this with the world. <br />
        This means that no matter their clientele, whether that’s small startups
        or large scale corporations, the Tuple team is here to help
        organizations reach the highest form of digital excellence and become
        leaders in their respective industry.
      </p> */}
      <p>
        {props.description
          ?.split("\n")
          .map((text, i) => text || <br key={`br-achievements-${i}`} />)}
      </p>
    </div>
  </div>
)

export default Achievement
