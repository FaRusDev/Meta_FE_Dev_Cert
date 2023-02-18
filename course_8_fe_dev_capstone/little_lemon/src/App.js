import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Specials from "./components/Specials"
import "./App.css"

function App() {
  return (
    <>
      <div className="px-20 flex flex-col space-y-10 xl:px-64">
        <Header />
        <Hero />
        <Specials />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
