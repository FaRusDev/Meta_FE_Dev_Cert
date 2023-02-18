import React from "react"
import menu1 from "../icons_assets/greek salad.jpg"

const Menu = () => {
  return (
    <div className="flex flex-col rounded-lg bg-highlight-color-first space-y-5 pb-5 xl:max-w-lg">
      <img src={menu1} className=" object-cover rounded-t-lg" alt="" />
      <div className="px-7 flex flex-col space-y-5">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-xl">Greek Salad</h4>
          <span className="text-secondary-color-first">$100</span>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          sequi sit porro velit itaque sapiente dolore vero deleniti at ea
          officiis laudantium quas, mollitia harum nostrum, molestiae quibusdam
          nulla. Ipsam!
        </p>
        <button className="font-bold max-w-fit">Order delivery</button>
      </div>
    </div>
  )
}

export default Menu
