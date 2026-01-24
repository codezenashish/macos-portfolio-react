import React, { useRef } from "react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";

const Window = ({
  title,
  children,
  onClose,
  onMinimize,
  isActive,
  onActivate,
}) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".title-bar"
      defaultPosition={{ x: 100, y: 50 }}
      bounds="parent"
      onStart={onActivate}
    >
      <div
        ref={nodeRef}
        style={{ position: "absolute" }}
        className={isActive ? "z-50" : "z-10"}
      >
        
        <motion.div
          onClick={onActivate}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-[800px] h-[500px] bg-[#fbfbfb] rounded-xl shadow-2xl border border-gray-300 overflow-hidden flex flex-col"
        >
          <div className="title-bar h-8 bg-[#e8e8e8] border-b border-gray-300 flex items-center px-4 relative select-none cursor-move">
            <div className="flex gap-2 group">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:bg-red-700 flex items-center justify-center"
              ></button>
              <button
                onClick={onMinimize}
                className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:bg-yellow-600"
              ></button>
              <button className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] hover:bg-green-600"></button>
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-700">
              {title}
            </span>
          </div>
          <div className="flex-1 overflow-auto bg-white p-4">{children}</div>
        </motion.div>
      </div>
    </Draggable>
  );
};

export default Window;
