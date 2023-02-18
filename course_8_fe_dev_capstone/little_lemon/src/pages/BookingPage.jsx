import { useReducer } from "react"
import Book from "../components/Book"
import { fetchAPI } from "../utils/api"
import useSubmitForm from "../utils/useSubmitForm"
import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function initializeTimes() {
  let today = new Date()
  return fetchAPI(today)
}

const updateTimes = (availableTimes, action) => {
  switch (action.type) {
    case "date":
      return fetchAPI(action.payload)
    default:
      return
  }
}

export default function BookingPage() {
  const { submitForm } = useSubmitForm()
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <div>
        <Book
          {...{
            submitForm,
            availableTimes,
            dispatch,
          }}
        />
        {/* <img
          className="map"
          src={require("../../assets/images/map.JPG")}
          alt="Little Lemon location"
        /> */}
      </div>
      <Footer />
    </>
  )
}

export { updateTimes, initializeTimes, useSubmitForm }
