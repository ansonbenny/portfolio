import React from "react";
import { GithubSvg, LinkedinSvg, Resume } from "../../assets";
import "./style.scss";

const Intro = () => {
  return (
    <section className="intro">
      <h1>Anson Benny</h1>
      <h3>Mern Stack Developer</h3>
      <p>I build accessible, highly quality mern projects.</p>

      <a href={Resume} className="resume" target="_blank">
        My Resume
      </a>

      <div className="links">
        <a href="https://github.com/ansonbenny/" target="_blank">
          <GithubSvg width={"25px"} height={"25px"} class_name={"icon"} />
        </a>
        <a
          href="https://www.linkedin.com/in/anson-benny/"
          target="_blank"
        >
          <LinkedinSvg width={"25px"} height={"25px"} class_name={"icon"} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
