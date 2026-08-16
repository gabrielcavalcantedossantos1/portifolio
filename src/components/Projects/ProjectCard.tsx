import type { CSSProperties } from 'react'
import type { Project } from '../../types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  category: 'frontend' | 'backend'
  style?: CSSProperties
}

export function ProjectCard({ project, category, style }: ProjectCardProps) {
  return (
    <article className={styles.card} style={style}>
      <div className={styles.thumbnail} data-category={category}>
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className={styles.thumbImg} />
        )}
        <span className={styles.thumbnailIcon} aria-hidden="true">
          {category === 'frontend' ? '◈' : '⬡'}
        </span>
        <span className={styles.year}>{project.year}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.status} data-status={project.status}>
            {project.status === 'completed' ? 'Concluído' : 'Em progresso'}
          </span>
        </div>

        <p className={styles.description}>{project.description}</p>
        <p className={styles.longDescription}>{project.longDescription}</p>

        {project.highlights.length > 0 && (
          <ul className={styles.highlights}>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        <div className={styles.tech}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <GitHubIcon />
              Código
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <ExternalIcon />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}
