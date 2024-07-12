import React, { useState, useRef, useEffect } from "react"
import { links, social } from "./data"
import { FaBars } from "react-icons/fa"
import logo from "./logo.svg"
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const linkStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  }

  return (
    <nav>
      <div className="nav-center">
        {/* Nav Header */}
        <div className="nav-header">
          <img src={logo} className="logo" alt="header-image" />
          <button onClick={toggleLinks} className="nav-toggle">
            <FaBars />
          </button>
        </div>

        {/* Nav Links */}
        <div className="links-container" style={linkStyle}>
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Social Links */}
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
