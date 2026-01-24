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
      className="relative flex flex-col justify-center items-center min-h-screen"
      id="welcome"
    >
      {/* Mobile warning - visible only on mobile */}
      <div className="md:hidden text-white text-center px-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-2 shadow-2xl">
        <p className="text-lg font-semibold capitalize">
          This portfolio is designed for desktop/tablet screens only.
        </p>
        <p className="mt-2">
          Please visit on a larger screen for the best experience.
        </p>
      </div>

      {/* Desktop content - hidden on mobile */}
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center w-full">
        <p className="text-white font-semibold capitalize">
          Hay, I Ashish, a passionate developer.
        </p>
        <h1 className="text-white font-bold text-4xl">Portfolio</h1>
      </div>

      {/* Windows container - FIXED: full screen size with relative positioning */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
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
      </div>
    </section>
  );
};

export default Desktop;
