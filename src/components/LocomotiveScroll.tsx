import LocomotiveScroll from "locomotive-scroll"
import { useEffect } from "react"

const scroll = {
  container: "#wrapper",
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.1,
    getSpeed: true,
  },
}

const Scroll = (callbacks: any): null => {
  useEffect(() => {
    // console.log("callbacks", callbacks)
    let scroller: LocomotiveScroll

    if (typeof window !== "undefined") {
      scroller = new LocomotiveScroll({
        el: document.querySelector<HTMLElement>(scroll.container) ?? undefined,
        smooth: true,
        getDirection: true,
      })
      scroller.on("scroll", (obj) => {
        fixHeadroom(obj)
      })
      new ResizeObserver(() => scroller.update()).observe(
        document.querySelector<HTMLElement>(scroll.container)!
      )
    }

    const fixHeadroom = (obj: LocomotiveScroll.OnScrollEvent): void => {
      let headroom

      if (typeof window !== "undefined") {
        headroom = document?.querySelector(".headroom")
      }

      // At top
      if (headroom && obj.scroll.y <= 25) {
        headroom?.classList.add(
          "headroom--unfixed",
          "headroom-disable-animation"
        )
        headroom?.classList.remove(
          "headroom--unpinned",
          "headroom--scrolled",
          "headroom--pinned"
        )
      } else {
        headroom?.classList.remove(
          "headroom--unfixed",
          "headroom-disable-animation"
        )
        headroom?.classList.add("headroom--unpinned", "headroom--scrolled")
      }

      // Direction
      if (obj.direction === "down") {
        headroom?.classList.add("headroom--unpinned", "headroom--scrolled")
        headroom?.classList.remove("headroom--pinned", "headroom--scrolled")
      } else if (obj.direction === "up" && obj.scroll.y !== 0) {
        headroom?.classList.remove("headroom--unpinned", "headroom--scrolled")
        headroom?.classList.add("headroom--pinned", "headroom--scrolled")
      }
    }

    // Exposing to the global scope for ease of use.
    // if (typeof window !== "undefined") {
    //   window.scroll = scroller as any
    // }

    return () => {
      if (scroller) scroller.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
