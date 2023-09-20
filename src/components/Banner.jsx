/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/Ashwin.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Ashwin Kumar Singh</h6>
            <h3>Software Engineer</h3>
            <p>
            Welcome to my personal portfolio! I'm Faizan Ahmad, a passionate and motivated Software Engineer. A recent BTech graduate in Computer Science, I showcase my journey, skills, and projects. Explore my portfolio to discover my dedication to coding excellence and innovation.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
