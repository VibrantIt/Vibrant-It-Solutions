import React from "react"
import { type IndexPageFrontmatterType } from "../pages"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

type HeroProps = NonNullable<IndexPageFrontmatterType>["hero"]

const Hero = (props: NonNullable<HeroProps>): React.ReactElement => (
  <div className="container">
    <div className="content">
      <h1 id="wH1">
        <span className="line1">{props.titleUp}</span>
        <br />
        <span className="line2">{props.titleHighlight}</span>
        <span className="line1">{props.titleDown}</span>
      </h1>
      <h1 id="mH1">
        <span className="line1">{props.titleUp}</span>
        <span className="line2">{props.titleHighlight}</span>
        <br />
        <span className="line1">{props.titleDown}</span>
      </h1>
      <p>{props.description}</p>
      <a href="/contact" className="button">
        {props.button?.buttonText} <img src={props.button?.icon!} alt="" />
      </a>
    </div>
    <div className="image">
      <LazyLoadImage
        src={props.image!}
        effect="blur"
        placeholderSrc={props.image!}
        alt="Description of your image"
      />
    </div>
  </div>
)

export default Hero
