import React from 'react';

const sampleProjects = [
  {
    title: 'Project One',
    description: 'A short description of project one with technologies used.'
  },
  {
    title: 'Project Two',
    description: 'A short description of project two with technologies used.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {sampleProjects.map((p, i) => (
            <article key={i} className="project-card">
              <h3>{p.title}</h3>
              <p className='description'>{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
