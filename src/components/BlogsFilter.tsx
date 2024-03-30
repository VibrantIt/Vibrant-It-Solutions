import * as React from "react"
import { type BlogListType } from "../pages/blogs"
import _ from "lodash"
import { format, parseISO } from "date-fns"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import { Link } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"

type BlogsFilterProps = NonNullable<BlogListType>

const BlogsFilter = ({
  data,
}: {
  data: BlogsFilterProps
}): React.ReactElement => {
  const [tag, setTag] = React.useState<string>("All")

  const tags = ["All"].concat(
    _.uniq(data.map((item) => item.node.frontmatter?.tag!)) ?? []
  )

  const [slides, setSlides] = React.useState<BlogsFilterProps>([])

  const breakpoints = useBreakpoint()

  React.useEffect(() => {
    if (tag === "All") {
      setSlides(data)
    } else {
      setSlides(data.filter((item) => item.node.frontmatter?.tag === tag))
    }
  }, [tag])

  return (
    <div className="filter">
      <h4>Filter by</h4>
      <div className="filter-by">
        {tags.map((item) => (
          <button
            key={`button-${item}`}
            className={tag === item ? "active" : ""}
            onClick={() => {
              setTag(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {breakpoints.sm ? (
        <div style={{ width: "100vw" }}>
          <div className="story-slide">
            <Swiper
              modules={[Pagination, Navigation]}
              navigation
              spaceBetween={"16px"}
              autoplay={{ delay: 100000000 }}
              slidesPerView={1.2}
              pagination={{ clickable: true }}
            >
              {slides.map((item, index) => (
                <SwiperSlide key={item.node.frontmatter?.title}>
                  <div className="story">
                    <Link
                      key={index}
                      to={`/blogs/${_.kebabCase(
                        item.node.frontmatter?.title!
                      )}`}
                    >
                      <LazyLoadImage
                        src={item.node.frontmatter?.thumbnail!}
                        effect="blur"
                        placeholderSrc={"/images/white-min.png"}
                        alt=""
                        width={"100%"}
                      />
                      <h4>
                        {(item.node.frontmatter?.title! + " ").padEnd(
                          60,
                          "\u00a0 "
                        )}
                      </h4>
                      <div id="author">
                        <img
                          src={
                            item.node.frontmatter?.overview?.details?.profile!
                          }
                          alt=""
                        />
                        {item.node.frontmatter?.overview?.details?.author}
                        <div id="ellipse"></div>
                        {format(
                          parseISO(
                            item.node.frontmatter?.overview?.details
                              ?.publishDate!
                          ),
                          "dd MMM, yyyy"
                        )}
                        <div id="ellipse"></div>
                        {item.node.frontmatter?.tag}
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="story-slide">
          {slides.map((item, index) => (
            <a
              key={index}
              href={`/blogs/${_.kebabCase(item.node.frontmatter?.title!)}`}
            >
              <div className="story">
                <LazyLoadImage
                  effect="blur"
                  src={item.node.frontmatter?.thumbnail!}
                  placeholderSrc={"/images/white-min.png"}
                  alt=""
                />
                <h4>
                  {(item.node.frontmatter?.title! + " ").padEnd(60, "\u00a0 ")}
                </h4>
                <p>{item.node.frontmatter?.overview?.description}</p>
                <div id="author">
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
                  {item.node.frontmatter?.tag}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogsFilter
