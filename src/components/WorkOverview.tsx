import * as React from "react"

type WorkOverviewProps = {
  title: string
  description: string
  heroImage: string
  introTitle: string
  introDescription: string
  introImage: string
}

const WorkOverview = ({
  title,
  description,
  heroImage,
  introTitle,
  introDescription,
  introImage,
}: WorkOverviewProps): React.ReactElement => (
  <>
    <div className="tuple">
      <h1>
        <span className="line2">{title}</span>
      </h1>
      <p>{description}</p>
    </div>
    <div className="truck">
      <img src={heroImage} alt="" id="web-view" />
      <img src="/images/work/image 9 (1).svg" alt="" id="mob-view" />
    </div>

    <div className="introduction">
      <div className="intro">
        <h2>{introTitle}</h2>
        <p>{introDescription}</p>
      </div>
      <div className="intro-pic">
        <img src={introImage} alt="" />
      </div>
    </div>
  </>
)

export default WorkOverview
