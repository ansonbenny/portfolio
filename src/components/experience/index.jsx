import React from "react";
import "./style.scss";

const Experience = () => {
  return (
    <section className="experience">
      <h3 className="title-sm">Experience</h3>
      <div className="cards">
        <div className="card">
          <div className="title">
            <h1>Freelancing</h1>
          </div>
          <div className="content">
            <h1>Full Stack</h1>
            <p>
              Stack used in react with javascript & node js. MongoDB used as
              database. Implemented More Api and Js Libraries. For reducing
              programming length in backend used express js framework of
              Javascript.
            </p>

            <div className="techs">
              <button>Full Stack</button>
              <button>MongoDB</button>
              <button>ExpressJs</button>
              <button>NodeJs</button>
              <button>JavaScript</button>
              <button>HTML & CSS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
