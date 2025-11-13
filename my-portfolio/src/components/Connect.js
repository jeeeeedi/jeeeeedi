import React from 'react';

export default function Connect() {
  return (
    <section id="connect" className="section connect">
      <div className="container">
        <h2>Connect with me!</h2>
        <ul className="connect-links">
          <li>
            <a href="https://www.linkedin.com/in/jeeeeedi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={process.env.PUBLIC_URL + '/InBug-Black.png'} alt="LinkedIn" className="connect-logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jeeeeedi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={process.env.PUBLIC_URL + '/github-mark.svg'} alt="GitHub" className="connect-logo" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
