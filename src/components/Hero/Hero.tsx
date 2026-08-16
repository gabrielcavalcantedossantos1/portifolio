import profilePhoto from "../../assets/face/rosto.jpeg";
import { personalInfo, portfolioStats } from "../../siteData";
import styles from "./Hero.module.css";

const stats = [
  {
    value: portfolioStats.frontendProjects,
    label: "Projetos Front-end",
  },
  {
    value: portfolioStats.backendProjects,
    label: "Projetos Back-end",
  },
  {
    value: portfolioStats.totalTechnologies,
    label: "Tecnologias",
  },
  {
    value: `${portfolioStats.yearsOfStudies}+`,
    label: "Anos de estudos",
  },
] as const;

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.content}>
        {personalInfo.availableForWork && (
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Disponível para projetos
          </span>
        )}

        <p className={styles.greeting}>Olá, eu sou</p>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <h2 className={styles.role}>{personalInfo.role}</h2>
        <p className={styles.tagline}>{personalInfo.tagline}</p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.btnPrimary}>
            Ver projetos
          </a>
          <a href="#contato" className={styles.btnSecondary}>
            Entrar em contato
          </a>
        </div>

        <div className={styles.meta}>
          <span>{personalInfo.location}</span>
          <span className={styles.metaDivider} aria-hidden="true">
            ·
          </span>
          <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
            {personalInfo.email}
          </a>
        </div>

        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.visual}>
        <div className={styles.photoFrame}>
          <img
            src={profilePhoto}
            alt={personalInfo.name}
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
}
