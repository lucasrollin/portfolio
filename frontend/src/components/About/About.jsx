import styles from './About.module.scss';

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.index}>002</span>
          <span className={styles.label}>À propos</span>
        </div>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              En reconversion,
              <br />
              <em>pleinement investi.</em>
            </h2>
          </div>
          <div className={styles.right}>
            <p>
              Après deux formations intensives en développement web, j'ai acquis
              des bases solides en React, Node.js, PostgreSQL et Docker. Je
              construis des applications fullstack en accordant autant
              d'importance à la qualité du code qu'à l'expérience utilisateur.
            </p>
            <p>
              Ce qui me motive : comprendre comment les choses fonctionnent,
              résoudre des problèmes concrets, et continuer à progresser chaque
              jour.
            </p>
            <div className={styles.facts}>
              <div className={styles.fact}>
                <span className={styles.factValue}>16 mois</span>
                <span className={styles.factLabel}>de formation</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factValue}>Fullstack</span>
                <span className={styles.factLabel}>React + Node.js</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factValue}>Sud de la France</span>
                <span className={styles.factLabel}>Remote friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
