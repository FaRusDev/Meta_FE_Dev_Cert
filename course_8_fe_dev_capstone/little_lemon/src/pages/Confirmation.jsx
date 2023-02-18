import { Link, useLocation } from "react-router-dom"

export default function Confirmation() {
  const { state } = useLocation()
  const {
    date,
    firstName,
    lastName,
    email,
    phone,
    time,
    occasion,
    guests,
    reserveNumber,
  } = state

  function upperCase(word) {
    const original = [...word]
    return original[0].toUpperCase() + original.slice(1).join("")
  }

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="max-w-lg flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-2xl">
          Table reserved at the Chicago Branch!
        </h1>
        <p>We have received your reservation with the following information:</p>
        <div className="details">
          <ul>
            <li>
              Reservation number:
              <span>
                {" "}
                <b>000-{reserveNumber}-123</b>
              </span>
            </li>
            <li>
              Full Name: {upperCase(firstName)} {upperCase(lastName)}
            </li>
            <li>Phone Number: {phone}</li>
            <li>Reservation date: {date}</li>
            <li>Reservation time: {time}</li>
            <li>Number of People: {guests}</li>
            <li>Occasion: {occasion ? occasion : "General"}</li>
          </ul>
        </div>
        <p>
          Order details has been sent to:{" "}
          <b>
            <i>{email}</i>
          </b>
        </p>
        <br />
        <Link
          className="bg-primary-color-second py-2 px-3 rounded-xl font-bold hover:bg-primary-color-first text-highlight-color-second hover:text-highlight-color-first"
          to="/book"
          rel="href"
          aria-label="Go back to Booking page"
        >
          Go Back
        </Link>
      </div>
    </div>
  )
}
