import * as React from "react"
import { type AboutPageFrontmatterType } from "../pages/about"

type AboutImageProps = NonNullable<AboutPageFrontmatterType>["aboutCollage"]

const AboutImage = (
  props: NonNullable<AboutImageProps>
): React.ReactElement => {
  return (
    <div className={"about-images"}>
      {props?.images?.map((item, index) => (
        <div className={`img${index + 1}`} key={index}>
          <img src={item?.image!} alt="" />
        </div>
      ))}
    </div>
  )
}

export default AboutImage
