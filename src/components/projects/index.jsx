import React from "react";
import { ArrowSvg } from "../../assets";
import "./style.scss";

const Projects = () => {
  const Items = [
    {
      title: "Music Platform - Create Your Own Playlist",
      details: `This project is a digital music platform, It's
      made for listening to music and making your favorite music
      collection. Spotify API is used to get tracks and albums,
      artists. Spotify API provides millions of music data. This
      project is made in the MERN stack.`,
      techs: ["Mern", "Javascript", "Spotify Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/Musicon.jpg?updatedAt=1685211821322",
      url: "",
    },
    {
      title: "ChatGPT - Clone of ChatGPT",
      details: `This project
      is clone of chatGPT , chatGPT an AI . It's allows you to have
      human-like conversations.`,
      techs: ["Mern", "Javascript", "OpenAi Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/ChatGPT.jpg?updatedAt=1685211707960",
      url: "",
    },
    {
      title: "Dall-E - Clone of Dall-E",
      details: `This is a clone of Dall-E of OpenAi, Its used to
      generate digital images from prompts (natural language
      descriptions).`,
      techs: ["Mern", "Javascript", "OpenAi Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/DALL-E.jpg?updatedAt=1685228911697",
      url: "",
    },
    {
      title: "E-commerce - Multi Vendor E-commerce Site",
      details: `Multi Vendor e-commerce website for online shopping, it's
      allows multi vendor features to allow sellers to sell on this
      website.`,
      techs: ["Mern", "Javascript", "OpenAi Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/ecom.jpg?updatedAt=1685228639581",
      url: "",
    },
  ];

  return (
    <section className="projects">
      <h3 className="title-sm">Projects</h3>

      <div className="cards">
        {Items?.map((obj, key) => {
          return (
            <a href={obj?.url} target="_blank">
              <div className="card" key={key}>
                <div className="cover">
                  <img src={obj?.img} alt={obj?.title} />
                </div>
                <div className="content">
                  <h1>
                    {obj?.title}&nbsp;
                    <ArrowSvg
                      width={"16px"}
                      height={"16px"}
                      class_name={"svg_fill"}
                    />
                  </h1>
                  <p>{obj?.details}</p>

                  <div className="techs">
                    {obj?.techs?.map((elm, index) => {
                      return <button key={index}>{elm}</button>;
                    })}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="view-full">
        <a
          href="https://github.com/ansonbenny?tab=repositories"
          target="_blank"
        >
          View Full Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
