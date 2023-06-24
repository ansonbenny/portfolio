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
              Designed and implemented web applications such as e-commerce sites
              for clients.
              <br />
              Developed fully responsive web pages for clients.
              <br />
              Updated website front and backend to improve SEO and security
              using best practices.
              <br />
              Designed and Developed Static Website For PHP Developer
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
