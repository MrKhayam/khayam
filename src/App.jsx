import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <div className="md:w-full overflow-hidden xl:w-[80%] h-screen mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
