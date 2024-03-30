import { ServiceMenu } from "./ServiceMenu"
import * as React from "react"
import useCommon from "../hooks/useCommon"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import MobMenu from "./MobMenu"
import DeskMenu from "./DeskMenu"
import { Squash as Hamburger } from "hamburger-react"

export type LayoutBounds = {
  height?: number
  width?: number
  margin?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
  padding?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
}

export const calcauteLayoutBounds = (
  el: HTMLElement
): LayoutBounds | undefined => {
  const styles = window.getComputedStyle(el)
  return {
    height: Number.parseInt(styles.height.replace("px", "")),
    width: Number.parseInt(styles.width.replace("px", "")),
    margin: {
      left: Number.parseInt(styles.marginLeft.replace("px", "")),
      right: Number.parseInt(styles.marginRight.replace("px", "")),
      top: Number.parseInt(styles.marginTop.replace("px", "")),
      bottom: Number.parseInt(styles.marginBottom.replace("px", "")),
    },
    padding: {
      left: Number.parseInt(styles.paddingLeft.replace("px", "")),
      right: Number.parseInt(styles.paddingRight.replace("px", "")),
      top: Number.parseInt(styles.paddingTop.replace("px", "")),
      bottom: Number.parseInt(styles.paddingBottom.replace("px", "")),
    },
  }
}

export type MenuProps = {
  menuOpen: boolean | null
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean | null>>
  headerBounds: LayoutBounds
}

const Navbar = ({
  mobileMenuActive,
  setMobileMenuActive,
  serviceMenuOpen,
  setServiceMenuOpen,
}: {
  mobileMenuActive: boolean | null
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean | null>>
  serviceMenuOpen: boolean | null
  setServiceMenuOpen: React.Dispatch<React.SetStateAction<boolean | null>>
}): React.ReactElement => {
  const { header } = useCommon()
  const breakpoint = useBreakpoint()
  const headerRef = React.useRef<HTMLElement>(null)
  const [headerBounds, setHeaderBounds] = React.useState<LayoutBounds>({})

  const calculateBounds = (): void => {
    if (headerRef.current) {
      const bounds = calcauteLayoutBounds(headerRef.current)
      if (bounds) setHeaderBounds(bounds)
    }
  }

  React.useLayoutEffect(() => {
    calculateBounds()
  }, [])

  React.useEffect(() => {
    window.addEventListener("resize", calculateBounds)
    return () => {
      window.removeEventListener("resize", calculateBounds)
    }
  }, [])

  return (
    <>
      <header ref={headerRef}>
        <a href="/">
          <img
            src={
              mobileMenuActive && breakpoint.sm
                ? header.Moblogo!
                : header.Weblogo!
            }
            alt="Logo"
          />
        </a>

        {!breakpoint.sm && (
          <DeskMenu
            serviceMenuOpen={serviceMenuOpen}
            setServiceMenuOpen={setServiceMenuOpen}
          />
        )}

        {breakpoint.sm && (
          <Hamburger
            size={24}
            duration={1}
            color={mobileMenuActive ? "#ffffff" : "#676A70"}
            toggled={mobileMenuActive!}
            toggle={() => {
              setMobileMenuActive(!mobileMenuActive)
            }}
          />
        )}
      </header>

      {!breakpoint.sm && (
        <ServiceMenu
          setMenuOpen={setServiceMenuOpen}
          menuOpen={serviceMenuOpen}
          headerBounds={headerBounds}
        />
      )}

      {breakpoint.sm && <MobMenu />}
    </>
  )
}
export default Navbar
