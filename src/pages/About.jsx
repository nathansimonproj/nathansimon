import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const skills = ['Python', 'Swift', 'React', 'LLMs', 'OAuth', 'YARA', 'REST APIs', 'Git']

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About — Nathan Simon'
  }, [])

  return (
    <main>
      <section className="article-header">
        <h1>About</h1>
        <p className="tagline">A little bit about who I am and what I'm working on.</p>
      </section>

      <section>
        <p>I love playing soccer, lifting weights, and experimenting in the kitchen. I've also always been drawn to solving problems, whether that be on the field or through a screen. My interest in tech started later in sophomore year of high school, with my very first Intro to Python class.</p>
        <p>At the University of Washington, I study Computer Science, where I've learned how impactful efficient software can be. Last summer, I interned at <Link to="/godaddy">GoDaddy</Link>, working with the Reporting and Security teams — shipping production-ready code and taking ownership across many areas.</p>
        <p>I'm currently exploring iOS development with Swift and building web apps with React.</p>
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
