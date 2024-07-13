import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <div className='bg-[#fefce8] min-h-screen px-6 py-4 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-28 lg:py-8'>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>

  )
}

export default App
