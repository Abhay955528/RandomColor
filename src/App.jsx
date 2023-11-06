import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");
  const randomColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;

  return (
    <>
      <div
        className="w-full h-screen duration-200 justify-center flex"
        style={{ background: color }}
      >
        <div className="h-12 w-40 justify-center flex my-8 rounded-l bg-yellow-100">
          <div className="h-8 w-36 my-2 rounded-l bg-black text-white">
            <button
              onClick={() => {
                setcolor(randomColor);
              }}
            >
              Random color
            </button>
          </div>
        </div>
        <div className="flex-wrap justify-center fixed bottom-12">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setcolor("red");
              }}
              className="outline-none px-4 rounded-xl"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setcolor("green");
              }}
              className="outline-none px-4 rounded-xl"
              style={{ background: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setcolor("orange");
              }}
              className="outline-none px-4 rounded-xl"
              style={{ background: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                setcolor("yellow");
              }}
              className="outline-none px-4 rounded-xl"
              style={{ background: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setcolor("Pink");
              }}
              className="outline-none px-4 rounded-xl"
              style={{ background: "pink" }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
