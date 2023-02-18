import React from "react"
import Logo from "../icons_assets/Logo.svg"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5">
      <img src={Logo} alt="logo" />
      <Nav />
    </header>
  )
}

export default Header
