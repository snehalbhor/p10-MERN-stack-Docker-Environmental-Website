import React from "react";
import "./Navbar.css";
import yourImage from "../nev.png";

const Navbar = () => {
  return (
    <section>
      <div>
        <img
          src={yourImage}
          alt="Description of the image"
          className="image-style"
        />
      </div>
      <div className="divmain">
        <div className="main1">Heal The Earth.....</div>
        <div className="main2">Heal Our Future.....</div>
      </div>
      <div className="part1">
        <div className="box1">
          <a className="gov1" href="https://moef.gov.in/moef/index.html">
            Government of India
          </a>
          <br />
          <br />
          Ministry of Environment, Forest and Climate Change
        </div>
        <div className="box2">
          <a
            className="gov1"
            href="https://www.unicef.org/environment-and-climate-change"
          >
            Climate change and environment
          </a>
          <br />
          <br />
          Conserving Nature, One Step at a Time
        </div>
        <div className="box3">
          <a href="/UserInteraction">
            <div className="change-text">User Interaction</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
