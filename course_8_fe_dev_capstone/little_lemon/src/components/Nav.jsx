import React from "react"
import { Link } from "react-router-dom"

const Nav = ({ col }) => {
  return (
    <nav className="sm:hidden md:block">
      <ul
        className={`box-content flex ${
          col && "flex-col "
        } justify-items-end gap-3`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/book">Order Online</Link>
        </li>
        <li className={col && `hidden`}>
          <Link
            className="bg-primary-color-first text-white py-2 px-3 rounded-lg hover:bg-secondary-color-first"
            to="/main"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
