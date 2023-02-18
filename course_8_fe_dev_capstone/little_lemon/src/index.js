import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Menu from "./pages/Menu"
import Reservation from "./pages/Reservation"
import Confirmation from "./pages/Confirmation"
import BookingPage from "./pages/BookingPage"

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  {
    path: "/book",
    element: <BookingPage />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
