import React, { type ReactElement } from "react"
import _, { debounce } from "lodash"
import { type MenuProps } from "./Navbar"
import useCommon from "../hooks/useCommon"
import { LazyLoadImage } from "react-lazy-load-image-component"

export const ServiceMenu = ({
  menuOpen,
  setMenuOpen,
  headerBounds,
}: MenuProps): ReactElement => {
  const debouncedMouseLeave = debounce(() => {
    setMenuOpen(false)
  }, 500)
  const { services, header } = useCommon()
  return (
    <menu
      onMouseLeave={() => debouncedMouseLeave()}
      className={`dropdown-menu service-${menuOpen ?? "none"}`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          paddingTop: `${
            (headerBounds.height ?? 40) + (headerBounds.padding?.top ?? 28)
          }px`,
        }}
      >
        <div
          style={
            {
              // display: "flex",
              // backgroundImage: "url('/images/dropdownImage.svg')",
              // flexGrow: "1",
              // backgroundSize: "cover",
              // backgroundPosition: "center center",
              // backgroundRepeat: "no-repeat",
            }
          }
          className="dropImg"
        >
          <LazyLoadImage
            placeholderSrc={header.DropDownImage!}
            src={header.DropDownImage!}
            alt=""
          />
        </div>
        <div className="dropItems">
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              // width: "55%",
            }}
          >
            {services.map((item, index) => (
              <a
                href={`/services/${_.kebabCase(item)}`}
                // className="dropdown-item"
                // className="dropItems"
                // style={{ width: "100%", display: "inline-block" }}
                key={index}
              >
                <li>
                  <span>{item}</span>
                  <img src="/images/down-right 1.svg" alt="down-arrow" />
                </li>
                {index !== services.length - 1 && (
                  <hr className="hr-bottom-border" />
                )}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </menu>
  )
}
