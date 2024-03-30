/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from "react"
import useCommon from "../hooks/useCommon"
import { useLocation } from "@reach/router"
const DeskMenu = ({
  serviceMenuOpen,
  setServiceMenuOpen,
}: {
  serviceMenuOpen: boolean | null
  setServiceMenuOpen: React.Dispatch<React.SetStateAction<boolean | null>>
}): React.ReactElement => {
  const { header } = useCommon()
  const path = useLocation()

  return (
    <>
      <nav>
        <ul>
          {header.navItems!.map((el) => (
            <li
              key={`navitem-${el!.item}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              {el?.item === "Services" ? (
                <button
                  className={`dropdown-button ${
                    path.pathname.includes("services") ? "nav-active" : ""
                  }`}
                  onMouseEnter={(e) => {
                    e.preventDefault()
                    if (!serviceMenuOpen) setServiceMenuOpen(true)
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    setServiceMenuOpen(!serviceMenuOpen)
                  }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Services
                  <i
                    className={
                      serviceMenuOpen
                        ? "icon-chevron-down rotate-down"
                        : "icon-chevron-down"
                    }
                    style={{ fontSize: "0.3rem", marginLeft: "0.25rem" }}
                  ></i>
                </button>
              ) : (
                <a
                  className={
                    path.pathname.includes(el?.link!) ? "nav-active" : ""
                  }
                  href={el?.link!}
                  onMouseEnter={(e) => {
                    e.preventDefault()
                    if (serviceMenuOpen) setServiceMenuOpen(false)
                  }}
                >
                  {el?.item}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default DeskMenu
