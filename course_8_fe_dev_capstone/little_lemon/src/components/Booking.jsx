import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Booking = ({ times, dispatch }) => {
  const navigate = useNavigate()
  const [date, setDate] = useState()
  const [guests, setGuests] = useState()
  const [occasion, setOccasion] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const [time, setTime] = useState()
  const [formData, setFormData] = useState()

  useEffect(() => {
    setFormData({
      date: date,
      guests: guests,
      occasion: occasion,
      time: time,
      name: name,
      email: email,
      phone: phone,
    })
  }, [date, guests, occasion, time, name, email, phone])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "time",
      payload: formData,
    })
    // console.log(date, guests, occasion, time, name, email, phone)
    navigate("/confirm")
  }

  return (
    <>
      <form
        className="grid place-items-center gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          className="rounded-full"
          type="date"
          id="res-date"
          onChange={(e) => {
            let d = new Date(e.target.value)
            dispatch({ type: "time", payload: { date: d } })
            setDate(d)
          }}
          // ref={date}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) => setTime(e.target.value)}
          // onChange={handleChange}
          // ref={time}
        >
          {times.date.map((t, i) => (
            <option key={i}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuests(e.target.value)}
          // onChange={handleChange}
          // ref={guests}
          required
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Input Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Input Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone">phone</label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Input Your number"
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
          // onChange={handleChange}
          // ref={occasion}
        >
          <option>Select Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input
          className="bg-primary-color-second py-2 px-3 rounded-xl font-bold hover:bg-primary-color-first text-highlight-color-second hover:text-highlight-color-first"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </>
  )
}

export default Booking
