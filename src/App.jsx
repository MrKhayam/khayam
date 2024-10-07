import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <div className="md:w-full overflow-hidden 2xl:w-[80%] xl:w-[90%] h-screen mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
