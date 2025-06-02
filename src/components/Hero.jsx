// src/components/Hero.jsx
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I'm <br />
          <span className="first-name">Dishen</span> <span className="last-name">Fernando</span>
        </h1>

        <p className="typewriter-text">
          <Typewriter
            words={[
              'Software Engineering Intern',
              'Spring Boot | Java | Flutter',
              'Passionate about Clean Code 💻',
              'Turning Ideas into Digital Realities ✨',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </p>

        <a href="#projects" className="cta-button">
          View My Work <FaArrowDown style={{ marginLeft: '8px' }} />
        </a>
      </div>
      <div className="hero-shape"></div>
    </section>
  );
};

export default Hero;
