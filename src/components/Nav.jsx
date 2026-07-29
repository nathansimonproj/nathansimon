import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-name">Nathan Simon</Link>
        <div className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}
