import { skills } from '../../siteData'
import styles from './Skills.module.css'

const categories = [
  { key: 'frontend' as const, label: 'Front-end', icon: '🎨' },
  { key: 'backend' as const, label: 'Back-end', icon: '⚙️' },
  { key: 'tools' as const, label: 'Ferramentas', icon: '🛠️' },
]

export function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Competências</span>
        <h2 className={styles.title}>Skills & Tecnologias</h2>
        <p className={styles.subtitle}>
          Stack que utilizo no dia a dia para entregar produtos de qualidade.
        </p>
      </div>

      <div className={styles.grid}>
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category.key,
          )

          return (
            <div key={category.key} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className={styles.cardTitle}>{category.label}</h3>
              </div>
              <ul className={styles.skillList}>
                {categorySkills.map((skill) => (
                  <li key={skill.name} className={styles.skillTag}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
