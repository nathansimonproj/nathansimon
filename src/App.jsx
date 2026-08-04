import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectPage from './pages/ProjectPage'
import GoDaddy from './pages/GoDaddy'
import BMW from './pages/BMW'

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/godaddy" element={<GoDaddy />} />
        <Route path="/bmw" element={<BMW />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
