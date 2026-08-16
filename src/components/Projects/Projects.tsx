import { useState } from 'react'
import { backendProjects, frontendProjects } from '../../data'
import type { ProjectCategory } from '../../types'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

const tabs: { key: ProjectCategory; label: string; count: number }[] = [
  { key: 'frontend', label: 'Front-end', count: frontendProjects.length },
  { key: 'backend', label: 'Back-end', count: backendProjects.length },
]

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('frontend')

  const projects =
    activeTab === 'frontend' ? frontendProjects : backendProjects

  return (
    <section id="projetos" className={styles.projects}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Portfólio</span>
        <h2 className={styles.title}>Meus Projetos</h2>
        <p className={styles.subtitle}>
          Uma seleção de projetos que demonstram minhas habilidades em
          desenvolvimento web — organizados por área de atuação.
        </p>
      </div>

      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Categorias de projetos"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            id={`tab-${tab.key}`}
            aria-selected={activeTab === tab.key}
            aria-controls={`panel-${tab.key}`}
            className={styles.tab}
            data-active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <span className={styles.tabCount}>{tab.count}</span>
          </button>
        ))}
      </div>

      <div
        key={activeTab}
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className={styles.grid}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            category={activeTab}
            style={{ animationDelay: `${index * 80}ms` }}
          />
        ))}
      </div>
    </section>
  )
}
