import * as React from "react"
import { type BlogListType } from "../templates/blog"
import { Swiper, type SwiperRef, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import BlogNavButton from "./BlogNavButton"
import _ from "lodash"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { format, parseISO } from "date-fns"

type MoreBlogProps = NonNullable<BlogListType>

const MoreBlog = ({ data }: { data: MoreBlogProps }): React.ReactElement => {
  const sliderRef = React.useRef<SwiperRef>(null)
  const breakpoint = useBreakpoint()

  const clickPrev = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const clickNext = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className="blog-post-filter">
      <BlogNavButton clickPrev={clickPrev} clickNext={clickNext} />
      <div className="blog-post-story-slide">
        <Swiper
          ref={sliderRef}
          modules={[Pagination, Navigation]}
          navigation
          slidesPerView={breakpoint.sm ? 1.2 : 3}
          spaceBetween={32}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={`/blogs/${_.kebabCase(item.node.frontmatter?.title!)}`}>
                <div className="blog-post-story">
                  <img src={item.node.frontmatter?.thumbnail!} alt="" />
                  <h4>
                    {(item.node.frontmatter?.title + " ").padEnd(60, "\u00a0 ")}
                  </h4>
                  <p id="author">
                    <img
                      src={item.node.frontmatter?.overview?.details?.profile!}
                      alt=""
                    />
                    {item.node.frontmatter?.overview?.details?.author}
                    <div id="ellipse"></div>
                    {format(
                      parseISO(
                        item.node.frontmatter?.overview?.details?.publishDate!
                      ),
                      "dd MMM, yyyy"
                    )}
                    <div id="ellipse"></div>
                    {item.node.frontmatter?.tag!}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MoreBlog
