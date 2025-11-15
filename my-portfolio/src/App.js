import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Connect from './components/Connect';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="App">
      <nav className="top-nav">
        <div className="nav-inner">
          <a className="logo-link" href="#">
            <img
              className="nav-logo"
              src={process.env.PUBLIC_URL + '/jeeeeedi.jpeg'}
              alt="logo"
            />
          </a>

          <div className="nav-links">
            <div className={`nav-item dropdown ${menuOpen ? 'open' : ''}`}>
              <button
                className="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((s) => !s)}
              >
                Projects ▾
              </button>
              <div className="dropdown-menu">
                <a href="#projects-personal-projects">Personal Projects</a>
                <a href="#projects-selected-school-projects">Selected School Projects</a>
                <a href="#projects-hackathons">Hackathons</a>
              </div>
            </div>
            <a href="#connect">Connect</a>
          </div>
        </div>
      </nav>

      <main>
        <header className="hero">
          <h1>Hi, I'm Jedi!</h1>
          <p className='main'>I'm a full-stack software development student at 
            <a href="https://gritlab.ax/" target="_blank" rel="noopener noreferrer" className="grit-link">
              <img src={process.env.PUBLIC_URL + '/gritlab_logo-dark.svg'} alt="grit:lab" className="grit-logo" />
            </a>
          .</p>
          <p className='description'>I used to work in copy editing, business proposal development, and corporate sustainability.<br />
          Now, I am exploring the world of tech and trying to find ways to apply it in sustainability.</p>
        </header>

        <Projects />
        <Connect />
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Jedi R.</footer>
    </div>
  );
}

export default App;
