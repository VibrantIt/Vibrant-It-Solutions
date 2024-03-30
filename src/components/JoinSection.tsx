import * as React from "react"
import { type CareerPageFrontmatterType } from "../pages/career"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

type JoinSectionProps = NonNullable<CareerPageFrontmatterType>["perks"]

const JoinSection = (
  props: NonNullable<JoinSectionProps>
): React.ReactElement => (
  <>
    <div className={"why-join"}>
      <h2>
        <span className={"head1"}>{props.title}</span>{" "}
        <span className={"head2"}>{props.titleHighlight}</span>
      </h2>
      <p>{props.description}</p>
    </div>
    <div className={"V-details"}>
      <div className={"left"}>
        {props.perk?.map((item, i) => (
          <div key={i} className={"v-it"}>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </div>
        ))}
        {/* <div className={"v-it"}>
          <h3>International Clients</h3>
          <p>
            We help clients worldwide, so you'll have the chance to collaborate
            with them, contribute to their businesses, and build your network by
            offering IT solutions.
          </p>
        </div>
        <div className={"v-it"}>
          <h3>Chill Environment</h3>
          <p>
            We are fitness freaks, but sometimes our love for burgers leads us
            to have a cheat day at the office.
          </p>
        </div>
        <div className={"v-it"}>
          <h3>Professional Growth</h3>
          <p>
            We don't restrict you to just your job. We make sure you keep
            learning and gaining experience in what you love, so work always
            stays interesting.
          </p>
        </div> */}
      </div>
      <div className={"right"}>
        <LazyLoadImage
          src={props.image!}
          placeholderSrc={props.image!}
          effect="blur"
          alt=""
        />
      </div>
    </div>
  </>
)

export default JoinSection
