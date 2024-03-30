import * as React from "react"
import { type CareerPageFrontmatterType } from "../pages/career"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

type CareerImageProps = NonNullable<
NonNullable<CareerPageFrontmatterType>["career"]
>["image"]

const CareerImage = ({
  image,
}: {
  image: CareerImageProps
}): React.ReactElement => (
  <div className={"career-image"}>
    <LazyLoadImage src={image!} placeholderSrc={image!} effect="blur" alt="" />
  </div>
)

export default CareerImage
