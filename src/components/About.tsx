import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

type AboutProps = NonNullable<IndexPageFrontmatterType>["about"]

const About = (props: NonNullable<AboutProps>): React.ReactElement => (
  <div className="about">
    <div className="left">
      <LazyLoadImage
        src={props.image!}
        effect="blur"
        placeholderSrc={props.image!}
        alt=""
      />
    </div>
    <div className="right">
      <div className="a-content">
        <h2>
          <span className="head1">{props.titleUp}</span>
          <span className="head2">{props.titleHighlight}</span>
          <br />
          <span className="head1">{props.titleDown}</span>
        </h2>
        <p>
          {props.description
            ?.split("\n")
            .map((text, i) => text || <br key={`br-about-${i}`} />)}
        </p>
        {/* <p dangerouslySetInnerHTML={{ __html: ! }} /> */}
        {/* have to implemnt break}
          {/* Dive into our world, where innovation isn't just a buzzword; it's a
          way of life. As an IT Solution Company, we go beyond conventional
          approaches, redefining what's possible in the digital realm. <br />
          <br />
          We're more than an IT Solutions Company; we infuse every project with
          passion and purpose. Join us in creating a future where technology
          harmonizes with humanity. */}

        <a href="/about" className="button">
          {props.button?.buttonText}
          <img src={props.button?.icon!} alt="" />
        </a>
      </div>
    </div>
  </div>
)

export default About
