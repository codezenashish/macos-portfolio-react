import React, { useState } from "react";
import { Window } from "../index";
const Desktop = () => {
  const [isWindowActive, setisWindowActive] = useState(false);
  const [isMinimize, setisMinimize] = useState(false);
  
  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen"
      id="welcome"
    >
      <p className="text-white font-semibold capitalize">
        Hay, I Ashish, a passionate developer.
      </p>
      <h1 className="text-white font-bold text-4xl">Portfolio</h1>
      <div className="sm:text-center text-white mt-4">
        <p>this portfolio is designed for desktop/tablet screens only.</p>
      </div>

      <Window
        title="Ashish Choudhary"
        isActive={isWindowActive}
        onClose={() => console.log("close window")}
        onMinimize={() => setisMinimize(true)}
        onActivate={() => setisWindowActive(true)}
      />
    </section>
  );
};

export default Desktop;
