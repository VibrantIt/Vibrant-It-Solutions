import * as React from "react"
import { useSwiper } from "swiper/react"

type TestimonialNavButtonsProps = {
  endActive: boolean
  startActive: boolean
}

const TestimonialNavButtons: React.FC<TestimonialNavButtonsProps> = ({
  endActive,
  startActive,
}) => {
  const swiper = useSwiper()
  return (
    <div className="testimonial-button">
      <div className="arrow" style={{ display: "flex" }}>
        <img
          onClick={() => {
            swiper.slidePrev()
          }}
          style={startActive ? { filter: "opacity(70%)" } : {}}
          src="/images/leftArrow.svg"
          alt=""
        />
        <img
          onClick={() => {
            swiper.slideNext()
          }}
          style={endActive ? { filter: "opacity(70%)" } : {}}
          src="/images/rightArrow.svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default TestimonialNavButtons
