import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function Section({ section }) {
  return (
    <section>
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}
      {section.items && (
        <ul className="point-list">
          {section.items.map(([lead, text]) => (
            <li key={lead}><strong>{lead}</strong> {text}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = project ? `${project.title.toLowerCase()} — nathan simon` : 'nathan simon'
    return () => { document.title = 'nathan simon' }
  }, [project])

  if (!project) {
    return (
      <main>
        <section className="article-header">
          <h1>Not found</h1>
          <p>That project doesn't exist.</p>
          <Link to="/projects" className="btn btn-outline">← Back to projects</Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="article-header">
        {project.icon && (
          <img className="app-icon" src={project.icon.src} alt={project.icon.alt} width="72" height="72" />
        )}
        <span className={`entry-category${project.category === 'personal' ? ' personal' : ''}`}>
          {project.cardLabel}
        </span>
        <h1>{project.title}</h1>
        <p className="tagline">{project.tagline}</p>
        <p className="entry-meta">
          <span>{project.date}</span>
          <span>{project.stack.join(', ')}</span>
        </p>
        {(project.live || project.github) && (
          <div className="contact-links">
            {project.live && (
              project.logo ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="live-link">
                  <img src={project.logo} alt={`${project.title} logo`} />
                  <span>View live ↗</span>
                </a>
              ) : (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-outline">View live</a>
              )
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">View on GitHub</a>
            )}
          </div>
        )}
      </section>

      {project.video && (
        <figure className="demo-video">
          <video
            src={project.video.src}
            poster={project.video.poster}
            width={project.video.width}
            height={project.video.height}
            aria-label={project.video.alt}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <figcaption>{project.video.caption}</figcaption>
        </figure>
      )}

      {project.sections.map(section => <Section key={section.heading} section={section} />)}

      {project.galleries && (
        <section>
          <h2>Screens</h2>
          {project.galleries.map((gallery, i) => (
            <div key={i} className={`gallery gallery-${gallery.shots.length}`}>
              {gallery.shots.map(shot => (
                <figure key={shot.src}>
                  <img src={shot.src} alt={shot.alt} width="552" height="1200" loading="lazy" />
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          ))}
          {project.galleryNote && <p className="gallery-note">{project.galleryNote}</p>}
        </section>
      )}

      {project.moreSections?.map(section => <Section key={section.heading} section={section} />)}

      {project.stats.length > 0 && (
        <section>
          <h2>{project.statsHeading || 'Impact'}</h2>
          <ul className="impact-list">
            {project.stats.map(stat => (
              <li key={stat.label}><strong>{stat.value}</strong> {stat.label}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <Link to="/projects" className="text-link">← Back to projects</Link>
      </section>
    </main>
  )
}
