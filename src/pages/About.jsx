import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const skills = ['Python', 'Node.js', 'React', 'PostgreSQL', 'Swift', 'LLMs', 'OAuth', 'REST APIs', 'Git']

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'about — nathan simon'
  }, [])

  return (
    <main>
      <section className="article-header">
        <h1>software for humans</h1>
        {/* <p className="tagline">Building software at the intersection of sleep and nutrition.</p> */}
      </section>

      <section>
        <p>I enjoy building software for people, especially health tech, where I can make a tangible impact on someones life</p>
        <p>At UW, I study Computer Science and Nutrition, specifically to work at the intersection of human biology and software systems</p>
        <p>Right now I'm building <Link to="/projects/drift">Drift</Link>, which models how caffeine and other substances decay in the body over time and forecasts how that will affect sleep that night. It's the first piece of a broader interest in sleep and nutrition tech: software that turns biology into something legible and actionable.</p>
        <p>Last summer I interned at <Link to="/godaddy">GoDaddy</Link> on the Reporting and Security teams, where I learned what it takes to ship production software responsibly — experience I now bring to building health tools people can actually rely on, not just prototypes.</p>
      </section>

      <section>
        <h2>Things I work with</h2>
        <div className="skills">
          {skills.map(s => <span key={s} className="skill">{s}</span>)}
        </div>
      </section>
    </main>
  )
}
