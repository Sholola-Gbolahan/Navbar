import React, { useState } from "react"
import { links, social } from "./data"
import { FaBars } from "react-icons/fa"
import logo from "./logo.svg"
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="header-image" />
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            showLinks ? "links-container show-container" : "links-container"
          }
        >
          <ul className="links">
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
