import React from 'react'
import { NavBar, Welcome } from './components'


const App = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/5552735/pexels-photo-5552735.jpeg')]">
        <NavBar />
        <Welcome />
      </div>
    </>
  )
}

export default App