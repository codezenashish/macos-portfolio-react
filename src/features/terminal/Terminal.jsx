import React, { useState, useEffect, useRef } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", content: "Last login: Sat Jan 24 09:00:00 on ttys000" },
    { type: "output", content: 'Type "help" to see available commands.' },
  ]);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = () => {
    const trimmedInput = input.trim().toLowerCase();
    const newHistory = [...history, { type: "command", content: input }];

    switch (trimmedInput) {
      case "help":
        newHistory.push({
          type: "output",
          content:
            "Available commands: \n - about \n - projects \n - skills \n - clear \n - whoami",
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "whoami":
        newHistory.push({ type: "output", content: "user@ashish-portfolio" });
        break;
      case "about":
        newHistory.push({
          type: "output",
          content: "I am Ashish, a Web Developer & UI/UX Designer.",
        });
        break;
      case "ls":
        newHistory.push({
          type: "output",
          content: "Documents  Downloads  Desktop  Projects  secret.txt",
        });
        break;
      case "":
        break;
      default:
        newHistory.push({
          type: "output",
          content: `zsh: command not found: ${input}`,
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  return (
    <div
      className="h-full w-full bg-white text-[#333] font-mono text-sm p-4 overflow-y-auto cursor-text"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {history.map((line, index) => (
        <div key={index} className="mb-1 whitespace-pre-wrap">
          {line.type === "command" ? (
            <div className="flex">
              <span className="font-bold text-blue-600 mr-2">
                ashish@macbook ~ %
              </span>
              <span>{line.content}</span>
            </div>
          ) : (
            <div className="text-gray-700">{line.content}</div>
          )}
        </div>
      ))}

      <div className="flex items-center">
        <span className="font-bold text-blue-600 mr-2">ashish@macbook ~ %</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-[#333] caret-gray-500"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
