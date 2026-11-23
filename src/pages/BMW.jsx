import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BMW() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'bmw — nathan simon'
    return () => { document.title = 'nathan simon' }
  }, [])

  return (
    <main>
      <section className="article-header">
        <span className="entry-category">Internship · Summer 2026</span>
        <h1>BMW Group</h1>
        <p className="tagline">Software engineering intern in Mountain View, building the platform behind BMW's executive meetings at CES 2027.</p>
        <p className="entry-meta">
          <span>June – Sep 2026</span>
          <span>React, TypeScript, Node.js, MySQL, AWS</span>
        </p>
      </section>

      <section>
        <h2>The problem</h2>
        <p>BMW schedules hundreds of executive meetings with partners at CES, and they were being scheduled by hand. Rescheduling was the worst part: moving a single meeting meant manually working out which other meetings shared participants and where everyone's time overlapped.</p>
        <p>I built core features of a full-stack CRM and event-planning platform (React, TypeScript, Node.js, MySQL) to replace that process. It was used to schedule 400+ executive meetings with partners at CES 2027.</p>
      </section>

      <section>
        <h2>Conflict detection</h2>
        <p>I owned conflict detection during rescheduling. When a meeting needs to move, the platform builds an auto-narrowing view that surfaces only the meetings with overlapping participants, so the planner sees exactly what the change will affect instead of searching the whole schedule by hand.</p>
      </section>

      <section>
        <h2>Backup and failover</h2>
        <p><strong>Before:</strong> the whole platform ran on a single EC2 instance with the MySQL database living inside it — one machine failing would take down both the app and its data.</p>
        <p><strong>After:</strong> I pulled the database out into Amazon RDS with automatic failover, ran the app on two EC2 instances in separate availability zones, and put a load balancer in front to route traffic between them. The platform held 99.9% uptime through 10x traffic spikes during the conference.</p>
      </section>

      <section>
        <h2>From a list to a calendar</h2>
        <p>Meetings were originally shown as one huge flat list. I turned it into an interactive calendar where planners can drag and drop meetings to reschedule them, with conflict detection flagging any clash as they move things around.</p>
        <p>It was one of 10+ UI/UX design fixes I shipped, which together cut page load times by 30% and user-reported issues by 20%.</p>
      </section>

      <section>
        <h2>Impact</h2>
        <ul className="impact-list">
          <li><strong>400+</strong> executive meetings scheduled at CES 2027</li>
          <li><strong>99.9%</strong> uptime under 10x conference traffic spikes</li>
          <li><strong>30%</strong> faster page loads</li>
          <li><strong>20%</strong> fewer user-reported issues</li>
        </ul>
      </section>

      <section>
        <Link to="/about" className="text-link">← Back to about</Link>
      </section>
    </main>
  )
}
