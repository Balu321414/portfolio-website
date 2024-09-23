import React, { Suspense, lazy } from 'react';
import AboutMe from './components/AboutMe';
import './App.css';

const Projects = lazy(() => import('./components/Projects'));
const Blog = lazy(() => import('./components/Blog'));

function App() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="section">
          <AboutMe />
        </section>
        <section id="projects" className="section">
          <Suspense fallback={<div>Loading Projects...</div>}>
            <Projects />
          </Suspense>
        </section>
        <section id="blog" className="section">
          <Suspense fallback={<div>Loading Blog...</div>}>
            <Blog />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export default App;
