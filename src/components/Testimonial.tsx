import * as React from "react"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import TestimonialNavButtons from "./TestimonialNavButton"

type TestimonialProps = NonNullable<Queries.CommonJsonTestimonialsTestimonial[]>

const Testimonial = ({
  data,
}: {
  data: TestimonialProps
}): React.ReactElement => {
  const [endActive, setEndActive] = React.useState(false)
  const [startActive, setStartActive] = React.useState(true)

  return (
    <div className="testimonial">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={"50rem"}
        onToEdge={(swiper) => {
          setEndActive(swiper.isEnd)
          setStartActive(swiper.isBeginning)
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={`Testimonial-${i}`}>
            <>
              <div className="testimonial-text">
                <img src="/images/Isolation_Mode.svg" alt="" />
                <h2 id="testi">{item.testimony}</h2>
              </div>
              <div className="testimonial-name">
                <h3 id="TN">
                  {item.name}
                  <p>{item?.bio}</p>
                </h3>
                <div id="Vline"></div>
                <img src={item.image!} alt="" />
              </div>
            </>
          </SwiperSlide>
        ))}
        <TestimonialNavButtons
          endActive={endActive}
          startActive={startActive}
        />
      </Swiper>
    </div>
  )
}

export default Testimonial
