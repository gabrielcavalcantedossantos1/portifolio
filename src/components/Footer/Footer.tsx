import { personalInfo } from '../../siteData'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Desenvolvido com React + TypeScript por{' '}
        <span className={styles.name}>{personalInfo.name}</span>
      </p>
      <p className={styles.copyright}>
        © {year} Todos os direitos reservados.
      </p>
    </footer>
  )
}
