import styles from './Navbar.module.scss';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          Lucas<span>.dev</span>
        </a>
        <nav>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
