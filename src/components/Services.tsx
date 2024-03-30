import * as React from "react"
import { type IndexPageFrontmatterType } from "../pages"
import { Link } from "gatsby"
import _ from "lodash"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react"
import { FreeMode, Scrollbar } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import "swiper/css/scrollbar"

type ServiceProps = NonNullable<IndexPageFrontmatterType>["services"]

const Service = (props: NonNullable<ServiceProps>): React.ReactElement => {
  const [hovered, setHovered] = React.useState<number | null>(null)

  const breakpoint = useBreakpoint()
  const sliderRef = React.useRef<SwiperRef>(null)

  return (
    <div className="services">
      <h2>
        <span className="head1">{props.title}</span>&nbsp;
        <span className="head2">{props.titleHighlight}</span>
      </h2>
      {breakpoint.sm ? (
        <div className="Scontainer">
          <Swiper
            id="service-swiper"
            ref={sliderRef}
            // modules={[Pagination, FreeMode]}
            modules={[Scrollbar, FreeMode]}
            slidesPerView={"auto"}
            spaceBetween={16}
            // pagination={{ type: "progressbar", clickable: true }}
            scrollbar={{ draggable: true, hide: false }}
            freeMode={true}
          >
            {props?.service?.map((item, index) => (
              <SwiperSlide
                style={{ width: "fit-content" }}
                key={`service-${index}`}
              >
                <div className="box">
                  <Link to={`/services/${_.kebabCase(item?.title!)}`}>
                    <img className="slogo" src={item?.icon!} alt="Logo 1" />
                    <h2>{item?.title} </h2>
                    <p>{item?.description}</p>
                    <img
                      style={{
                        position: "absolute",
                        right: "1rem",
                        bottom: "1.5rem",
                      }}
                      src={
                        breakpoint.sm
                          ? "/images/down-right 1.svg"
                          : hovered === index
                            ? "/images/down-right-1.svg"
                            : "/images/down-right 1.svg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="Scontainer">
          {props?.service?.map((item, index) => (
            <a
              key={`ser~${index}`}
              href={`/services/${_.kebabCase(item?.title!)}`}
            >
              <div
                className="box"
                onMouseOver={() => {
                  setHovered(index)
                }}
                onMouseOut={() => {
                  setHovered(null)
                }}
              >
                <img className="slogo" src={item?.icon!} alt="Logo 1" />
                <h2>
                  {item?.title}{" "}
                  <img
                    src={
                      hovered === index
                        ? "/images/down-right-1.svg"
                        : "/images/down-right 1.svg"
                    }
                    alt=""
                  />
                </h2>
                <p>{item?.description}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Service
