import { BrowserRouter } from "react-router-dom" // easy for nevigate between links 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Hero, About, Contact, BallsCanvas } from "./components"
import { Slider } from "./components/Slider"
// import Hero from "./components/Hero"

function App() {
  //<div className="bg-cover bg-center bg-no-repeat filter brightness-70 transform scale-110" style={{ backgroundImage: "url('path_to_your_image.jpg')" }}>

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gray-100 ">
        <div className="bg-tennisBack bg-contain" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', minHeight: '100vh' }}>
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div className="relative z-0 bg-black">
          <Contact />
          <BallsCanvas />
        </div>
      </div>

      {/* <Slider /> */}
    </BrowserRouter>

  )
}

export default App
