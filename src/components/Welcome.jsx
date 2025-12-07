import gsap from 'gsap';
import React from 'react'

const Welcome = () => {
  const titleRef = React.useRef(null);
  const subtitleRef = React.useRef(null);
  return (
    <section className='flex flex-col justify-center items-center min-h-screen' id='welcome'>
      <p >Hay, I Ashish, a passionate developer.</p>
      <h1>Portfolio</h1>
      <div className="small-screen">
        <p>this portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  )
}

export default Welcome