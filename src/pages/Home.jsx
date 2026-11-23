import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from '../components/SocialLinks'
import ProjectEntry from '../components/ProjectCard'
import { projects } from '../data/projects'

const featuredSlugs = ['spots', 'drift']
const featured = featuredSlugs
  .map(slug => projects.find(p => p.slug === slug))
  .filter(Boolean)

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'nathan simon'
  }, [])

  return (
    <>
      <div className="cover">
        <img src="/attachments/hero.jpg" alt="" />
        <div className="cover-overlay">
          <div className="cover-inner">
            <h1>Nathan Simon</h1>
            <p className="status-line"><span className="dot" />Currently @ BMW Tech</p>
          </div>
        </div>
      </div>

      <main>
        <section className="hero">
          <div className="status-lines">
            <p className="status-line">Computer Science &amp; Nutrition @ UW</p>
            <p className="status-line">Building Health Tech</p>
            <p className="status-line">Seattle/San Francisco</p>
          </div>
          <SocialLinks />
        </section>

        <section>
          <h2>Projects</h2>
          <div className="entry-list">
            {featured.map(p => <ProjectEntry key={p.slug} project={p} />)}
          </div>
          <Link to="/projects" className="more-link">See all projects →</Link>
        </section>
      </main>
    </>
  )
}
