import { useEffect } from 'react'
import ProjectEntry from '../components/ProjectCard'
import { projects } from '../data/projects'

function groupByCompany(list) {
  const groups = new Map()
  for (const project of list) {
    const key = project.company || 'Other'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(project)
  }
  return groups
}

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Projects — Nathan Simon'
  }, [])

  const groups = groupByCompany(projects)

  return (
    <main>
      <section className="article-header">
        <h1>Projects</h1>
        <p className="tagline">Things I've built at work and on my own time.</p>
      </section>

      {[...groups.entries()].map(([company, items]) => (
        <section key={company}>
          <h2>{company}</h2>
          <div className="entry-list">
            {items.map(p => <ProjectEntry key={p.slug} project={p} />)}
          </div>
        </section>
      ))}
    </main>
  )
}
