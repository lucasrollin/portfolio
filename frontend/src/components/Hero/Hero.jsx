import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <div className={styles.meta}>
          <span>001</span>
          <span>Développeur Fullstack</span>
        </div>
        <h1 className={styles.title}>
          Construire des
          <br />
          <em>applications web</em>
          <br />
          qui durent.
        </h1>
        <div className={styles.line} />
        <p className={styles.desc}>
          React · Node.js · PostgreSQL · Docker.
          <br />
          Basé en France, disponible pour un premier poste junior.
        </p>
        <a href="#contact" className={styles.cta}>
          Me contacter
        </a>
      </div>
    </section>
  );
}

export default Hero;
