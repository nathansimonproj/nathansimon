import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function GoDaddy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'bmw — nathan simon'
    return () => { document.title = 'nathan simon' }
  }, [])

  return (
    <main>
      <section className="article-header">
        <span className="entry-category">Internship · Summer 2026</span>
        <h1>BMW tech</h1>
        <p className="tagline">Gemini Spark, Dolby Atmos, YouTube Music</p>
      </section>

      <section>
        {/* <img className="project-img" src="/attachments/GoDaddy.png" alt="GoDaddy" /> */}
        <h2>What I worked on</h2>
        <p><strong><Link to="/projects/yara-transpiler">Dolby Atmos</Link>:</strong> Worked closely with sister teams at Dolby and the Music team at BMW tech group. Implemented dynamic spatial audio rendering across test NA5 models.</p>
        <p><strong><Link to="/projects/yara-transpiler">Gemini Spark</Link>:</strong> Orchestrated the architecture of a vehicle-integrateable AI agent using Gemini Spark. Integrated OpenTable, GSuite apps, and other apps. built and tested in select vehicles in San Francisco</p>
        <p><strong><Link to="/projects/ops-review">YouTube Music</Link>:</strong> Led the development and testing phase of a standalone YouTube Music app in BMWs</p>
      </section>

      <section>
        <Link to="/about" className="text-link">← Back to about</Link>
      </section>
    </main>
  )
}
