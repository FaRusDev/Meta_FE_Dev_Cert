import React from "react"
import Img1 from "../icons_assets/restauranfood.jpg"

const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-6 place-content-center sm:grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col space-y-6 justify-center items-start place-self-center">
        <h1 className="font-extrabold text-5xl text-primary-color-second">
          Little Lemon
        </h1>
        <h4>Chicago</h4>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          quaerat ab, quae fugiat illum, alias voluptates laudantium itaque,
          asperiores laborum iure. Non labore ullam neque nihil exercitationem,
          ducimus saepe itaque!
        </p>
        <button className="bg-primary-color-second py-2 px-3 rounded-xl font-bold hover:bg-primary-color-first text-highlight-color-second hover:text-highlight-color-first">
          Reserve a Table
        </button>
      </div>
      <img
        className="h-96 w-96 object-cover place-self-end rounded-xl sm:hidden md:block"
        src={Img1}
        alt=""
      />
    </section>
  )
}

export default Hero
