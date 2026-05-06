import styles from './Skills.module.scss';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'pratiqué' },
      { name: 'TypeScript', level: 'pratiqué' },
      { name: 'JavaScript', level: 'pratiqué' },
      { name: 'HTML / CSS / SCSS', level: 'pratiqué' },
      { name: 'Zustand', level: 'pratiqué' },
      { name: 'Responsive design', level: 'pratiqué' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'pratiqué' },
      { name: 'Express', level: 'pratiqué' },
      { name: 'REST API', level: 'pratiqué' },
      { name: 'JWT / Sessions', level: 'pratiqué' },
      { name: 'PostgreSQL', level: 'pratiqué' },
      { name: 'Sequelize', level: 'notions' },
    ],
  },
  {
    category: 'Conception',
    items: [
      { name: 'Merise (MCD / MLD)', level: 'pratiqué' },
      { name: 'UML', level: 'pratiqué' },
      { name: 'Architecture MVC', level: 'pratiqué' },
      { name: 'Microservices', level: 'notions' },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker / Compose', level: 'pratiqué' },
      { name: 'Nginx', level: 'pratiqué' },
      { name: 'GitHub Actions', level: 'pratiqué' },
      { name: 'Linux', level: 'pratiqué' },
    ],
  },
  {
    category: 'Qualité',
    items: [
      { name: 'Jest', level: 'pratiqué' },
      { name: 'Tests unitaires', level: 'pratiqué' },
      { name: "Tests d'intégration", level: 'notions' },
      { name: 'Sécurité web (CORS / XSS)', level: 'notions' },
    ],
  },
  {
    category: 'Outils',
    items: [
      { name: 'Git / GitHub', level: 'pratiqué' },
      { name: 'Figma', level: 'notions' },
      { name: 'Insomnia', level: 'pratiqué' },
      { name: 'Agile / Scrum', level: 'pratiqué' },
    ],
  },
];

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.index}>003</span>
          <span className={styles.label}>Compétences</span>
        </div>
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <span className={styles.name}>{item.name}</span>
                    {item.level === 'notions' && (
                      <span className={styles.notions}>notions</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
