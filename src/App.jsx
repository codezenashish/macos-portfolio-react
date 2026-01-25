import React from "react";
import { NavBar, Desktop, Dock } from "./components";

const App = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
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
