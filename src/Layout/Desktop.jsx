import { useSelector, useDispatch } from "react-redux";
import { closeApp, minimize, setFocus } from "../App/features/osSlice";
import { Window } from "../components/index";
import Terminal from "../page/Terminal";
import { AnimatePresence } from "framer-motion"; 

const Desktop = () => {
  const dispatch = useDispatch();
  const apps = useSelector((state) => state.os.apps);
  const activeApp = useSelector((state) => state.os.activeApp);

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

     
      <AnimatePresence mode="wait">
        {apps.about.isOpen && !apps.about.isMinimized && (
          <Window
            key="about" 
            title="About Me"
            isActive={activeApp === "about"}
            onClose={() => dispatch(closeApp("about"))}
            onMinimize={() => dispatch(minimize("about"))}
            onActivate={() => dispatch(setFocus("about"))}
          >
            <h2>About content here</h2>
          </Window>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {apps.terminal.isOpen && !apps.terminal.isMinimized && (
          <Window
            key="terminal" 
            title="Terminal"
            isActive={activeApp === "terminal"}
            onClose={() => dispatch(closeApp("terminal"))}
            onMinimize={() => dispatch(minimize("terminal"))}
            onActivate={() => dispatch(setFocus("terminal"))}
          >
            <Terminal />
          </Window>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Desktop;
