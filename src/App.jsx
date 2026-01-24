import React from "react";
import { NavBar, Desktop, Dock } from "./components";

const App = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/5552735/pexels-photo-5552735.jpeg')]">
        <div className="hidden md:block">
          <NavBar />
        </div>
        <Desktop />
        <div className="hidden md:block">
          <Dock />
        </div>
      </div>
    </>
  );
};

export default App;
