import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function GoDaddy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'godaddy — nathan simon'
    return () => { document.title = 'nathan simon' }
  }, [])

  return (
    <main>
      <section className="article-header">
        <span className="entry-category">Internship · Summer 2025</span>
        <h1>GoDaddy</h1>
        <p className="tagline">Two teams, two shipped projects — security tooling and reporting automation.</p>
      </section>

      <section>
        <img className="project-img" src="/attachments/GoDaddy.png" alt="GoDaddy" />
        <h2>What I worked on</h2>
        <p><strong><Link to="/projects/yara-transpiler">YARA Transpiler</Link>:</strong> Worked on the security team to develop an LLM-powered custom reasoning model to transpile 500+ unformatted malware signatures and malicious files into robust, industry standard YARA rules. Worked with security engineers to drop manual review process by approximately 30%.</p>
        <p><strong><Link to="/projects/ops-review">Ops Review Automation</Link>:</strong> Worked on the SRE team to build client libraries for querying their Grafana and Kibana dashboards. Built end to end pipelines to automatically ingest over 1000+ metrics weekly into ServiceNow, reducing manual import time by 52%.</p>
      </section>

      <section>
        <Link to="/about" className="text-link">← Back to about</Link>
      </section>
    </main>
  )
}
