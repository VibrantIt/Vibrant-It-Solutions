import { Menu, Transition } from "@headlessui/react"
import React, { Fragment, type ReactElement } from "react"
import useCommon from "../hooks/useCommon"
import { Link } from "gatsby"
import _ from "lodash"
import PlusMinus from "./PlusMinus"

const MobMenu = (): ReactElement => {
  const { header, services } = useCommon()
  return (
    <menu className="mobile-menu">
      <div className="mob-list-items">
        <ul>
          <li className="menu-item">
            <Link to="/" activeClassName="active-menu-item">
              Home
            </Link>
            <hr className="hr-bottom-border" />
          </li>
          {header.navItems
            ?.filter((menu) => menu !== null && menu.item !== "Contact Us")
            .map((menu, i) =>
              menu!.item === "Services" ? (
                <Menu key={`menu-${i}`}>
                  {({ open: serviceOpen }) => (
                    <li className="service-menu-item menu-item">
                      <Menu.Button className="service-menu-btn" id="services">
                        Services
                        <PlusMinus open={serviceOpen} />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="enter-transition"
                        enterFrom="initial"
                        enterTo="final"
                        leave="leave-transition"
                        leaveFrom="final"
                        leaveTo="initial"
                      >
                        <Menu.Items as="ul" className="service-list-items">
                          {services.map((item, i) => (
                            <Menu.Item as="li" key={`service-${i}`}>
                              <Link
                                to={`/services/${_.kebabCase(item)}`}
                                activeClassName="active-menu-item"
                              >
                                {item}
                              </Link>
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                      <hr className="hr-bottom-border" />
                    </li>
                  )}
                </Menu>
              ) : (
                <li key={`menu-${i}`} className="menu-item">
                  <Link to={menu!.link!} activeClassName="active-menu-item">
                    {menu!.item}
                  </Link>
                  <hr className="hr-bottom-border" />
                </li>
              )
            )}
        </ul>
      </div>
      <Link to="/contact" className="menu-button" style={{}}>
        Lets Talk
        <img src="/images/Button Icon.svg" alt="" />{" "}
      </Link>
    </menu>
  )
}

export default MobMenu
