
import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="c__hero">
      <img className="c__hero-img" src={hero.image} alt="" />
      <div className="c__hero-gallery">
      <h2>
        {hero.name}
      </h2>
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
          
        <p> <a href={hero.linkedIn}>
        💾LinkedIn⬅Click me!
          </a></p>

        <p>💾<a href={hero.gitHub}>
            GitHub ⬅Click me!
          </a></p>
      </div>
    </div>
  );
};

export default Hero;