import React from "react"
import BaseLayout from "./BaseLayout"
import Solution from "../components/Solution"
import Testimonial from "../components/Testimonial"
import useCommon from "../hooks/useCommon"

type LayoutProp = {
  children: React.ReactNode
  pageName: string
}
const CommonLayout = ({
  children,
  pageName,
}: LayoutProp): React.ReactElement => {
  const { solution, testimonials } = useCommon()
  return (
    <BaseLayout pageName={pageName}>
      {children}
      <Testimonial data={testimonials} />
      <Solution {...solution} />
    </BaseLayout>
  )
}

export default CommonLayout
