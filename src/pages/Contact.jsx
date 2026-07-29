import { useEffect } from 'react'
import SocialLinks from '../components/SocialLinks'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact — Nathan Simon'
  }, [])

  return (
    <main>
      <section className="article-header">
        <h1>Contact</h1>
        <p className="tagline">I'm always happy to chat — feel free to reach out.</p>
      </section>

      <section>
        <div className="contact-links">
          <a href="mailto:nsimon06@uw.edu" className="btn">Email me</a>
          <a href="/attachments/NathanSimonResume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">Resume</a>
        </div>
        <SocialLinks />
      </section>
    </main>
  )
}
