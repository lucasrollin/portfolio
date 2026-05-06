import styles from './Projects.module.scss';

const projects = [
  {
    index: '01',
    title: 'Portfolio',
    description:
      'Site portfolio personnel avec formulaire de contact connecté à une API Express. Déployé sur VPS avec Docker et Nginx.',
    stack: ['React', 'SCSS', 'Node.js', 'Express', 'Docker', 'Nginx'],
    github: 'https://github.com/lucasrollin/portfolio',
    live: null,
  },
];

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.index}>004</span>
          <span className={styles.label}>Projets</span>
        </div>
        <div className={styles.list}>
          {projects.map((project) => (
            <div key={project.index} className={styles.project}>
              <div className={styles.projectHeader}>
                <span className={styles.projectIndex}>{project.index}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectLinks}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.projectDesc}>{project.description}</p>
              <ul className={styles.stack}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
