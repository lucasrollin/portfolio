import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Navbar.module.scss';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setIsOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <>
      <header className={styles.navbar}>
        <div className={`container ${styles.inner}`}>
          <a href="#" className={styles.logo}>
            Lucas<span>.dev</span>
          </a>

          <nav className={styles.desktopNav}>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {createPortal(
        <nav
          className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
          aria-hidden={!isOpen}
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>,
        document.body,
      )}
    </>
  );
}

export default Navbar;
