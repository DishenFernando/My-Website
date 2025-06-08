import './Projects.css';

const projects = [
  {
    title: 'FurrPal App',
    description: 'A pet matchmaking and community app with shop and AR features.',
    tech: ['Flutter', 'Firebase', 'Firestore'],
    link: 'https://github.com/Chandupa04/furrpal',
  },
  {
    title: 'Ticket Management System Frontend',
    description: 'A real-time ticketing system with React + Spring Boot.',
    tech: ['React', 'CSS'],
    link: 'https://github.com/DishenFernando/TicketingSystem_Frontend',
  },
  {
    title: 'Ticket Management System Backend',
    description: 'A static brochure site for an interior design business.',
    tech: ['SpringBoot','MySQL'],
    link: 'https://github.com/DishenFernando/TicketSystem_Backend',
  },
  {
    title: 'My Portfolio Website',
    description: 'Flutter shop page connected to Firebase with Stripe integration.',
    tech: ['React', 'CSS', 'HTML','JavaScript'],
    link: 'https://github.com/DishenFernando/My-Website',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">🚀 My Projects</h2>
      <p className="section-subtitle">Explore the ideas I've brought to life</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span className="tech-badge" key={idx}>{tech}</span>
              ))}
            </div>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
