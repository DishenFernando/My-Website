// src/components/About.jsx
import './About.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="about dark-theme" id="about">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right">
          <img src="/member2.jpg" alt="Dishen Fernando" />
        </div>

        <div className="about-text" data-aos="fade-left">
          <h2>👋 About Me</h2>
          <p>
            I'm <strong>Dishen Fernando</strong>, a <strong>Full-Stack Software Engineer</strong> who builds sleek, functional, and performance-optimized applications that make a difference.
          </p>
          <p>
            With experience in both frontend and backend technologies, I’ve crafted apps like <strong>FurrPal</strong> and real-time <strong>Ticket Management Systems</strong>. I care deeply about user experience, code readability, and clean architecture.
          </p>
          <p>
            I’m passionate about solving problems, contributing to teams, and continuously improving my design and development skills to stay ahead in the tech world.
          </p>

          <div className="about-highlights">
            <div className="highlight" data-aos="fade-up" data-aos-delay="100">
              <h4>🛠 Tech Stack</h4>
              <p>React, Flutter, Firebase, Spring Boot, MySQL, MongoDB</p>
            </div>
            <div className="highlight" data-aos="fade-up" data-aos-delay="200">
              <h4>🎨 Creative Skills</h4>
              <p>UI/UX Design, Prototyping, Canva, Branding</p>
            </div>
            <div className="highlight" data-aos="fade-up" data-aos-delay="300">
              <h4>🤝 Soft Skills</h4>
              <p>Leadership, Time Management, Agile Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
