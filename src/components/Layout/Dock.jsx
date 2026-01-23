import React, { useState } from "react";
import { dockItem } from "../../constants";

const Dock = ({ onAppClick }) => {
  // State to track which icon is being hovered (for tooltip)
  const [hoveredApp, setHoveredApp] = useState(null);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 mb-2">
      <div className="flex items-end gap-3 px-4 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl">
        {dockItem.map((app) => (
          <div
            key={app.id}
            className="relative group flex flex-col items-center"
          >
            {hoveredApp === app.id && (
              <div className="absolute -top-12 px-3 py-1 bg-gray-800/80 text-white text-xs rounded-md backdrop-blur-sm border border-white/10 shadow-lg animate-fade-in mb-2 whitespace-nowrap">
                {app.name}
              </div>
            )}

            {/* Icon Button */}
            <button
              onClick={() => onAppClick(app.id)}
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
              className={`
                relative w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg
                transition-all duration-300 ease-out
                hover:scale-125 hover:-translate-y-4 hover:mx-2
                active:scale-95 active:translate-y-0
                ${app.color} 
              `}
            >
              <img
                className="w-full h-full object-cover"
                src={app.icon}
                alt={app.name}
              />
            </button>

            {/* Active Indicator (Dot niche) - Optional logic add kar sakte ho */}
            {/* <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
