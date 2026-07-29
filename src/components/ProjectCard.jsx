import { Link } from 'react-router-dom'

export default function ProjectEntry({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="entry">
      <span className={`entry-category${project.category === 'personal' ? ' personal' : ''}`}>
        {project.cardLabel}
      </span>
      <h3>{project.title}</h3>
      <p>{project.blurb}</p>
      <div className="entry-meta">
        <span>{project.date}</span>
        <span>{project.cardTags.join(', ')}</span>
      </div>
    </Link>
  )
}
