import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'

const App = () => {
  return (
    <>
      <Router>
      <div className="md:w-full overflow-hidden 2xl:w-[90%] h-screen mx-auto">
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
