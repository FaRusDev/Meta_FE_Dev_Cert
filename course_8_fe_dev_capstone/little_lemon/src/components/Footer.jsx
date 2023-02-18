import React from "react"
import Nav from "./Nav"
import Logo from "../icons_assets/Logo .svg"

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 gap-4">
      <img src={Logo} alt="" className="rounded-xl w-48 place-self-center" />
      <div>
        <h3 className="text-xl font-bold">Doormant Navigation</h3>
        <Nav col={true} />
      </div>
      <div>
        <h3 className="text-xl font-bold">Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Social Media</h3>
        <ul>
          <li>Address</li>
          <li>phone number</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
