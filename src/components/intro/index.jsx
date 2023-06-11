import React from "react";
import { GithubSvg, HashnodeSvg, LinkedinSvg } from "../../assets";
import "./style.scss";

const Intro = () => {
  return (
    <section className="intro">
      <h1>Anson Benny</h1>
      <h3>Mern Stack Developer</h3>
      <p>
        I build accessible, inclusive products and digital experiences for the
        web.
      </p>

      <a href="" className="resume" target="_blank">
        My Resume
      </a>

      <div className="links">
        <a href="">
          <GithubSvg width={"25px"} height={"25px"} class_name={"icon"} />
        </a>
        <a href="">
          <HashnodeSvg width={"25px"} height={"25px"} class_name={"icon"} />
        </a>
        <a href="">
          <LinkedinSvg width={"25px"} height={"25px"} class_name={"icon"} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
