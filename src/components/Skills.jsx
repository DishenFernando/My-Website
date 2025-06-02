// src/components/Skills.jsx
import {
  FaReact, FaNodeJs, FaJsSquare, FaGitAlt, FaJava,
  FaGithub, FaFigma, FaDocker,
} from 'react-icons/fa';
import {
  SiTypescript, SiRedux, SiMongodb, SiSpring, SiMysql,
  SiHtml5, SiCss3, SiFirebase, SiFlutter
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">🧠 My Technical Toolbox</h2>
      <p className="section-subtitle">Here are the tools & technologies I work with:</p>

      <div className="skills-grid">
        {/* Frontend Skills */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="icons">
            <div className="skill-icon"><FaReact color="#61DBFB" /><p>React</p></div>
            <div className="skill-icon"><SiTypescript color="#007acc" /><p>TypeScript</p></div>
            <div className="skill-icon"><FaJsSquare color="#f7df1e" /><p>JavaScript</p></div>
            <div className="skill-icon"><SiHtml5 color="#e34c26" /><p>HTML</p></div>
            <div className="skill-icon"><SiCss3 color="#264de4" /><p>CSS</p></div>
            <div className="skill-icon"><FaFigma color="#a259ff" /><p>Figma</p></div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="icons">
            <div className="skill-icon"><FaNodeJs color="#68a063" /><p>Node.js</p></div>
            <div className="skill-icon"><SiSpring color="#6db33f" /><p>Spring Boot</p></div>
            <div className="skill-icon"><FaJava color="#007396" /><p>Java</p></div>
            <div className="skill-icon"><SiMysql color="#f29111" /><p>MySQL</p></div>
            <div className="skill-icon"><SiMongodb color="#4db33d" /><p>MongoDB</p></div>
            <div className="skill-icon"><SiFirebase color="#ffcb2b" /><p>Firebase</p></div>
          </div>
        </div>

        {/* Tools & Others */}
        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <div className="icons">
            <div className="skill-icon"><FaGithub color="#333" /><p>GitHub</p></div>
            <div className="skill-icon"><FaGitAlt color="#f1502f" /><p>Git</p></div>
            <div className="skill-icon"><FaDocker color="#0db7ed" /><p>Docker</p></div>
            <div className="skill-icon"><SiFlutter color="#02569b" /><p>Flutter</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
