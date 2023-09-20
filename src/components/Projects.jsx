/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Android App News Application",
      img: "/projects/1.png",
      gLink: "https://github.com/Ashwin-0007",
      lLink: "https://github.com/Ashwin-0007/NEWS-APP",
      desc:"Experience the latest headlines on-the-go with our Java/XML-powered Android news app. Seamlessly fetching real-time updates from diverse news APIs, it delivers a tailored newsfeed for an immersive information experience."
    },
    {
      title: "Tour & Travel Website",
      img: "/projects/img2.avif",
      gLink: "https://github.com/Ashwin-0007",
      lLink: "https://github.com/Ashwin-0007/Tours-and-Travells.Github.io",
      desc:"esponsive Travel Website Designed a responsive tour and travel website featuring attractive packages and services to engage users. Engaged users with dynamic gallery, reviews, and contact form "
    },
    {
      title: "Personal Portfolio Website",
      img: "/projects/3.jpg",
      gLink: "https://github.com/Ashwin-0007",
      lLink: "https://",
      desc:
      "Elevate user experience with captivating React animated card effects. Transform static content into engaging visuals, using cutting-edge animations for a modern and interactive interface."
    },
    {
      title: "Simple text editor using react",
      img: "/projects/6.jpg",
      gLink: "https://github.com/Ashwin-0007",
      lLink: "https://github.com/Ashwin-0007/TextEditor",
      desc:
      "Introducing our versatile Text Editor project. Seamlessly edit and format your text: remove excess spaces, toggle between upper and lower case, copy content, and efficiently count words and characters. Simplify your text manipulation tasks with ease."
    },
    {
      title: "Tic-Tak-Toe Android App",
      img: "/projects/5.webp",
      gLink: "https://github.com/Ashwin-0007",
      lLink: "https://github.com/Ashwin-0007/Tic-Tac-Toe",
      desc:"Play the classic Tic Tac Toe game on your Android device! This app showcases strategic gameplay, intuitive UI, and two-player mode for endless entertainment. Experience nostalgia in a modern twist."
    },
    // {
    //   title: "Animated Cards effects react",
    //   img: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    //   gLink: "https://github.com/Faizan0004",
    //   lLink: "https://github.com/Faizan0004/React-45-best-quotes-about-nature",
    //   desc:  "Elevate user experience with captivating React animated card effects. Transform static content into engaging visuals, using cutting-edge animations for a modern and interactive interface."
    // },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Faizan0004"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
