import { useEffect, useRef } from "react";
import { Intro } from "./components";
import "./App.scss";

function App() {
  const ref = useRef();

  useEffect(() => {
    const Pointer = (e) => {
      if (e?.pageX && e?.pageY && ref?.current) {
        ref.current.style.display = "block";
        ref.current.style.left = `${e?.pageX}px`;
        ref.current.style.top = `${e?.pageY}px`;
      }
    };

    window.addEventListener("mousemove", Pointer);

    return () => {
      window.removeEventListener("mousemove", Pointer);
    };
  }, []);

  return (
    <section className="main">
      <div ref={ref} className="pointer" />
      <div className="fixed-left">
        <Intro />
      </div>
      <div className="right"></div>
    </section>
  );
}

export default App;
