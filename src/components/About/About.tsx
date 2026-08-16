import { experiences, personalInfo } from '../../siteData'
import styles from './About.module.css'

export function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Sobre mim</span>
        <h2 className={styles.title}>Quem sou eu</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.bio}>
          <p className={styles.text}>{personalInfo.bio}</p>
          <p className={styles.text}>
            Atualmente focado em construir aplicações web modernas com React e
            APIs robustas em Node.js. Sempre aberto a novos desafios e
            colaborações.
          </p>
        </div>

        <div className={styles.experience}>
          <h3 className={styles.subtitle}>Experiência</h3>
          <ul className={styles.timeline}>
            {experiences.map((exp) => (
              <li key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineMarker} aria-hidden="true" />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>{exp.period}</span>
                  <h4 className={styles.company}>{exp.company}</h4>
                  <p className={styles.role}>{exp.role}</p>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
