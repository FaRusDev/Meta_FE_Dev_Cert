import Booking from "../components/Booking"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useReducer } from "react"
import { useEffect } from "react"
import { fetchAPI, submitAPI } from "../utils/api"
import Confirmation from "../components/Confirm"

export const updateTimes = (state, action) => {
  if (action.type === "time") {
    if (submitAPI(action.payload)) {
      // state.date = fetchAPI(action.payload.date)
      state.date = [23, 31, 43]
      if (action.payload) {
        state.formData = action.payload
      }
      return state
    }
  }
}

export const initializeTimes = () => {
  let today = new Date()
  return { date: fetchAPI(today), formData: {} }
}
const Reservation = () => {
  useEffect(() => {}, [])

  const [times, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <>
      <main className="px-20 flex flex-col space-y-10 xl:px-64">
        <Header />
        <Booking {...{ times, dispatch }} />
        <Confirmation {...{ times }} />
        <Footer />
      </main>
    </>
  )
}

export default Reservation
