import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.name}>Lucas.dev</span>
        <div className={styles.links}>
          <a
            href="https://github.com/lucasrollin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-rollin-950882258/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <span className={styles.copy}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
