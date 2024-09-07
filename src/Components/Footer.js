import React from 'react'
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/latest-news">Latest News</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
