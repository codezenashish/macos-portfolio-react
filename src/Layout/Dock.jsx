import { useDispatch, useSelector } from "react-redux";
import { opneApp, setFocus } from "../App/features/osSlice";
import { dockItem } from "../constants";

const Dock = () => {
  const dispatch = useDispatch();
  const apps = useSelector((state) => state.os.apps);
  const activeApp = useSelector((state) => state.os.activeApp);

  const handleDockClick = (id, canOpen) => {
    if (!canOpen) return;

    const appState = apps[id];

    // If app exists in state and is already open
    if (appState?.isOpen) {
      // If minimized, restore it by setting focus
      if (appState.isMinimized) {
        dispatch(setFocus(id));
      } else {
        // Already open and visible, just focus it
        dispatch(setFocus(id));
      }
    } else {
      // App not open, open it
      dispatch(opneApp(id));
    }
  };

  // Check if an app is open (exists in Redux state)
  const isAppOpen = (id) => apps[id]?.isOpen || false;

  // Check if app is minimized
  const isAppMinimized = (id) => apps[id]?.isMinimized || false;

  // Check if app is active (focused)
  const isAppActive = (id) => activeApp === id;

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-2 shadow-2xl z-50">
      <div className="flex gap-2 items-end">
        {dockItem.map(({ id, name, icon, canOpen }) => {
          const isOpen = isAppOpen(id);
          const isMinimized = isAppMinimized(id);
          const isActive = isAppActive(id);

          return (
            <div
              key={id}
              onClick={() => handleDockClick(id, canOpen)}
              className={`group relative flex flex-col items-center ${canOpen ? "cursor-pointer" : "cursor-not-allowed"}`}
            >
              {/* Icon container with active/open state styling */}
              <div
                className={`
                  relative rounded-xl p-1 transition-all duration-300
                  ${
                    isOpen && isActive
                      ? "bg-white/30 backdrop-blur-md shadow-lg ring-1 ring-white/40"
                      : isOpen && !isActive
                        ? "bg-white/15 backdrop-blur-sm"
                        : ""
                  }
                `}
              >
                <img
                  src={icon}
                  alt={name}
                  className={`
                    w-14 h-14 transition-all duration-300 
                    hover:scale-125 hover:-translate-y-2 
                    active:scale-95 active:translate-y-0
                    }
                  `}
                />

                {/* Glow effect for active app */}
                {isOpen && isActive && (
                  <div className="absolute inset-0 rounded-xl bg-white/20 blur-md -z-10" />
                )}
              </div>

              {/* Dot indicator - shows when app is open */}
              <div
                className={`
                w-1.5 h-1.5 rounded-full mt-1 transition-all duration-300
                ${
                  isOpen
                    ? isActive
                      ? "bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                      : "bg-white/70"
                    : "bg-transparent"
                }
              `}
              />

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
