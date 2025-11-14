import React from 'react';
import fikafinaldemo from '../assets/fikafinaldemo.mp4';
import fikaposter from '../assets/fikacafe_screens.png';
import puppyescapemov from '../assets/puppyescape.mov';
import puppyescapepng from '../assets/puppyescape.png';

// Helper to replace known words/URLs in project descriptions with anchors
function renderDescription(text){
  if(!text) return null;
  const parts = [];
  let remaining = text;
  const patterns = [
    /* {key: 'grit:lab', href: 'https://gritlab.ax/'}, */
    {key: 'https://fika.live', href: 'https://fika.live'},
    {key: 'https://jeeeeedi.github.io/make-your-game/', href: 'https://jeeeeedi.github.io/make-your-game/'}
  ];

  while(remaining.length){
    let idx = -1;
    let which = null;
    let matchKey = null;
    for(const p of patterns){
      const i = remaining.indexOf(p.key);
      if(i >= 0 && (idx === -1 || i < idx)){
        idx = i; which = p; matchKey = p.key;
      }
    }
    if(idx === -1){
      parts.push(remaining);
      break;
    }
    if(idx > 0){
      parts.push(remaining.slice(0, idx));
    }
    parts.push(
      <a key={parts.length} href={which.href} target="_blank" rel="noopener noreferrer">{matchKey}</a>
    );
    remaining = remaining.slice(idx + matchKey.length);
  }

  return parts.map((p, i) => typeof p === 'string' ? <span key={i}>{p}</span> : React.cloneElement(p, {key:i}));
}

const projects = [
  {
    title: 'forum',
    subtitle: 'grit:lab Fika Café',
    link: 'https://github.com/olegamobile/forum',
    media: { type: 'video', src: fikafinaldemo, poster: fikaposter },
    description: 'We created a web forum where users can register, post, comment, like, upload images, and categorize posts. We had to manage authentication and authorization, password encryption, cookies and sessions, and a database. We were not allowed to use any frontend libraries or frameworks, so I had to build the frontend from scratch in vanilla HTML and CSS. The grit:lab Fika Café is live. You’re welcome to interact and test our site: https://fika.live.',
    skills: ['Go', 'JavaScript', 'SQLite', 'Docker', 'HTTP', 'HTML', 'CSS', 'unit testing', 'bcrypt', 'web development']
  },
  {
    title: 'make-your-game',
    subtitle: 'Puppy Escape',
    link: 'https://github.com/jeeeeedi/make-your-game',
    media: { type: 'video', src: puppyescapemov, poster: puppyescapepng },
    description: 'This was our first game development project. We had to create a single-player game similar to Bomberman using pure JavaScript, HTML, and CSS, focusing on achieving a consistent 60 FPS without any frame drops. I implemented the game mechanics and optimized performance, which deepened my understanding of the `requestAnimationFrame`, the event loop, and DOM manipulation. You can play our game, Puppy Escape, here: https://jeeeeedi.github.io/make-your-game/.',
    skills: ['JavaScript', 'HTML', 'CSS', 'requestAnimationFrame', 'event loop', 'DOM manipulation', 'Developer Tools', 'game development']
  },
  {
    title: 'graphql',
    link: 'https://github.com/jeeeeedi/graphql',
    media: { type: 'video', src: puppyescapemov, poster: puppyescapepng }, //TODO: add media
    description: 'graphql description placeholder.', //TODO: update description
    skills: ['JavaScript'] //TODO: update skills
  },
  {
    title: 'social-network',
    link: 'https://github.com/jeeeeedi/social-network',
    media: { type: 'video', src: puppyescapemov, poster: puppyescapepng }, //TODO: add media
    description: 'description placeholder.', //TODO: update description
    skills: ['JavaScript'] //TODO: update skills
  },
  {
    title: 'buy-01',
    link: 'https://github.com/jeeeeedi/buy-01',
    media: { type: 'video', src: puppyescapemov, poster: puppyescapepng }, //TODO: add media
    description: 'description placeholder.', //TODO: update description
    skills: ['JavaScript'] //TODO: update skills
  }
];

// Group projects into categories.
const categories = [
  { title: 'Personal Projects', projects: [] },
  { title: 'School Projects', projects },
  { title: 'Hackathons', projects: [] }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        {categories.map((cat) => {
          const id = `projects-${cat.title.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <div className="project-category" id={id} key={cat.title}>
              <h3 className="category-title">{cat.title}</h3>
              <div className="project-list">
                {cat.projects.length ? cat.projects.map((p, i) => (
                  <ProjectCard key={cat.title + '-' + i} project={p} />
                )) : <p className="no-projects">🚧 No projects yet.</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({project}){
  const [videoLoaded, setVideoLoaded] = React.useState(false);

  return (
      <article className="project-card">
        <h3 className="project-title">{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a> : project.title}</h3>
        {project.subtitle && <div className="project-subtitle">{project.subtitle}</div>}

      {project.media && (
        <div className="project-media">
          {project.media.type === 'image' ? (
            <img src={project.media.src} alt={project.title} loading="lazy" />
          ) : (
            !videoLoaded ? (
              <div className="poster-wrap" role="button" tabIndex={0}
                onClick={() => setVideoLoaded(true)}
                onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') setVideoLoaded(true); }}>
                <img src={project.media.poster} alt={project.title + ' poster'} loading="lazy" />
                <button className="play-overlay" aria-label="Play demo">▶</button>
              </div>
            ) : (
              <video controls preload="metadata" poster={project.media.poster}>
                <source src={project.media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          )}
        </div>
      )}

      <p className='description'>{renderDescription(project.description)}</p>
      <ul className='skills'>
        {project.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
