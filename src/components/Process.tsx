import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import NavButtons from "./NavButtons"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

type ProcessProps = NonNullable<IndexPageFrontmatterType>["process"]

const Process = (props: NonNullable<ProcessProps>): React.ReactElement => {
  const processes = props.phases!
  const breakpoint = useBreakpoint()
  const sliderRef = React.useRef<SwiperRef>(null)

  const clickPrev = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const clickNext = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  const [endActive, setEndActive] = React.useState(false)
  const [startActive, setStartActive] = React.useState(true)

  return (
    <section>
      <div className="process">
        <h2>
          <span className="head1">{props.title}</span>&nbsp;
          <span className="head2">{props.titleHighlight}</span>
        </h2>
        <p>{props.description}</p>
        <a href="#" className="button">
          {props.button?.buttonText}{" "}
        </a>
      </div>

      <Swiper
        id="process-swiper"
        ref={sliderRef}
        modules={[Pagination, Navigation, FreeMode]}
        slidesPerView={breakpoint.sm ? 1.25 : "auto"}
        spaceBetween={breakpoint.sm ? 40 : 64}
        pagination={{ type: "progressbar" }}
        onToEdge={(swiper) => {
          setEndActive(swiper.isEnd)
          setStartActive(swiper.isBeginning)
        }}
        freeMode={true}
      >
        <div className="process-container">
          {processes?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-container">
                <div className="p-left">
                  {`0${index + 1}`}
                  <h2>{item?.title}</h2>
                </div>
                <p>{item?.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {!breakpoint.sm && (
        <NavButtons
          endActive={endActive}
          startActive={startActive}
          clickPrev={clickPrev}
          clickNext={clickNext}
        />
      )}
    </section>
  )
}

export default Process
