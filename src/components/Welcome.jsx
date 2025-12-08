
import React from 'react'

const Welcome = () => {

  return (
    <section className='flex flex-col justify-center items-center min-h-screen' id='welcome'>
      <p className='text-white font-semibold capitalize'>Hay, I Ashish, a passionate developer.</p>
      <h1 className='text-white font-bold text-4xl'>Portfolio</h1>
      <div className="sm:text-center text-white mt-4">
        <p>this portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  )
}

export default Welcome