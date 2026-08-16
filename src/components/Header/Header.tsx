import { useState } from 'react'
import { navLinks } from '../../siteData'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './Header.module.css'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo} onClick={handleNavClick}>
        <span className={styles.logoAccent}>&lt;</span>
        dev
        <span className={styles.logoAccent}>/&gt;</span>
      </a>

      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.menuBar} data-open={menuOpen} />
        <span className={styles.menuBar} data-open={menuOpen} />
        <span className={styles.menuBar} data-open={menuOpen} />
      </button>

      <nav
        id="main-nav"
        className={styles.nav}
        data-open={menuOpen}
        aria-label="Navegação principal"
      >
        <ul className={styles.navList}>
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  data-active={isActive}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
