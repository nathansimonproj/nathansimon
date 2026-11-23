import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const skills = 
[
  'Java', 'TypeScript', 'AWS', 'React', 'CI/CD', 'Agentic AI', 
  'Python', 'PostgreSQL'
]
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'about — nathan simon'
  }, [])

  return (
    <main>
      <section className="article-header">
        <h1>software for humans</h1>
      </section>

      <section>
        <p>I enjoy building software for people, especially health tech, where I can make a tangible impact on someones life</p>
        <p>At UW, I study Computer Science and Nutrition, specifically to work at the intersection of human biology and software systems</p>
        <p>Right now I'm building <Link to="/projects/spots">Spots</Link>, an iPhone app that keeps distracting apps blocked everywhere except the places you choose. Arrive at the gym or the library and they open on their own; leave and they lock again. There's no unlock button.</p>
        <p>This past summer I interned at <Link to="/bmw">BMW Group</Link>, building the platform BMW used to schedule 400+ executive meetings at CES 2027. The summer before, I was at <Link to="/godaddy">GoDaddy</Link> on the Reporting and Security teams. Both taught me what it takes to ship production software responsibly — experience I now bring to building health tools people can actually rely on, not just prototypes.</p>
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
