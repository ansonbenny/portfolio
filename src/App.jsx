import { useEffect, useRef } from "react";
import { About, Experience, Intro, Projects, Skills } from "./components";
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
      <div className="fixed-left">
        <Intro />
      </div>
      <div className="right">
        <About />
        <Skills />
        <Projects />
        <Experience />
      </div>
      <div ref={ref} className="pointer" />
    </section>
  );
}

export default App;
