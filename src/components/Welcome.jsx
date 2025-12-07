import React from 'react'
const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'whgt' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};


const Welcome = () => {
  const titleRef = React.useRef(null);
  const subtitleRef = React.useRef(null);
  return (
    <section className='flex flex-col justify-center items-center min-h-screen' id='welcome'>
      <p ref={subtitleRef}>{renderText('Hay, I Ashish, a passionate developer.', "text-3xl font-georama", 100)} </p>
      <h1 ref={titleRef} className="text-5xl font-bold text-white mt-2">Portfolio</h1>
      <div className="small-screen">
        <p>this portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  )
}

export default Welcome