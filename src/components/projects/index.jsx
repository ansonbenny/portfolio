import React from "react";
import { ArrowSvg } from "../../assets";
import "./style.scss";

const Projects = () => {
  const Items = [
    {
      title: "Social Media WebApp",
      details: `This project is a Social Media platform, 
      It's made for live private/group chat & Video/Audio Call, 
      project allow to share stories. Socket.io/WebSocket used for live chat , 
      WebRTC / PeerJs (for peer 2 peer) used for live Video/Audio Calls.`,
      techs: ["WebRTC", "Socket.IO", "WebSocket", "Mern"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/social_media.png?updatedAt=1695894837837",
      url: "https://github.com/ansonbenny/Social-Media",
    },
    {
      title: "Music Streamer - Create Your Own Playlist",
      details: `This project is a digital music platform, It's
      made for listening to music and making your favorite music
      collection. Spotify API is used to get tracks and albums,
      artists. Spotify API provides millions of music data. This
      project is made in the MERN stack.`,
      techs: ["Mern", "Javascript", "Spotify Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/Musicon.jpg?updatedAt=1685211821322",
      url: "https://github.com/ansonbenny/Music-Streamer",
    },
    {
      title: "ChatGPT - Clone of ChatGPT",
      details: `This project
      is clone of chatGPT , chatGPT an AI . It's allows you to have
      human-like conversations.`,
      techs: ["Mern", "Javascript", "OpenAi Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/ChatGPT.jpg?updatedAt=1685211707960",
      url: "https://github.com/ansonbenny/ChatGPT.git",
    },
    {
      title: "Dall-E - Clone of Dall-E",
      details: `This is a clone of Dall-E of OpenAi, Its used to
      generate digital images from prompts (natural language
      descriptions).`,
      techs: ["Mern", "Javascript", "OpenAi Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/DALL-E.jpg?updatedAt=1685228911697",
      url: "https://github.com/ansonbenny/DALL-E.git",
    },
    {
      title: "E-commerce - Multi Vendor E-commerce Site",
      details: `Multi Vendor e-commerce website for online shopping, it's
      allows multi vendor features to allow sellers to sell on this
      website.`,
      techs: ["Mern", "Javascript", "OpenAi Api"],
      img: "https://ik.imagekit.io/avkzxljm7/Portfolio/ecom.jpg?updatedAt=1685228639581",
      url: "https://github.com/ansonbenny/MultiVendor-Ecommerce.git",
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
