import React from 'react';
import bg from '../assets/images/bg.png'
import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="content">
        <h2>About Me</h2>
        <p>Coming soon...</p>
      </div>
      <div>
        <img src={bg} alt="Background" className="background-image" />
      </div>
    </section>
  );
}

export default About;
