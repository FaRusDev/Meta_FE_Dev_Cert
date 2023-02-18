import React from "react"
import Menu from "./Menu"

const Specials = () => {
  return (
    <section className="">
      <div className="flex justify-between mb-10 items-center">
        <h2 className="font-bold text-2xl">This Weeks Specials !</h2>
        <button className="bg-primary-color-second py-2 px-3 rounded-xl font-bold hover:bg-primary-color-first text-highlight-color-second hover:text-highlight-color-first">
          Online Menu
        </button>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-3 gap-6 place-items-center ">
        <Menu />
        <Menu />
        <Menu />
      </div>
    </section>
  )
}

export default Specials
