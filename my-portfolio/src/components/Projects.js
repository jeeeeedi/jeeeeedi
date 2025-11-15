import React from 'react';
import { fikafinaldemo, fikaposter, puppyescapemov, puppyescapepng, graphql1, graphql2, socnet01, socnet02, socnet03, socnet04, socnet05, socnet06, idrott_AttendancebyAgeGroup, idrott_dashboard } from '../assets';

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
    description: 'This was our first game development project. We had to create a single-player game similar to Bomberman using pure JavaScript, HTML, and CSS, focusing on achieving a consistent 60 FPS without any frame drops. I implemented the game mechanics and optimized performance, which deepened my understanding of the requestAnimationFrame, the event loop, and DOM manipulation. You can play our game, Puppy Escape, here: https://jeeeeedi.github.io/make-your-game/.',
    skills: ['JavaScript', 'HTML', 'CSS', 'requestAnimationFrame', 'event loop', 'DOM manipulation', 'Developer Tools', 'game development']
  },
  {
    title: 'graphql',
    link: 'https://github.com/jeeeeedi/graphql',
    media: { type: 'carousel', images: [graphql1, graphql2] },
    description: 'I created a grit:lab student profile page using GraphQL to learn the query language and manipulations associated with it. I developed a user interface that displays selected school information, including a statistics section with SVG graphs illustrating my achievements. I also implemented a secure login page with JWT authentication to access my data.',
    skills: ['JavaScript', 'SVG', 'GraphQL', 'web hosting', 'JWT', 'UI/UX', 'API', 'web development', 'GitHub Pages', 'data visualization']
  },
  {
    title: 'social-network',
    subtitle: 'SocialHub',
    link: 'https://github.com/jeeeeedi/social-network',
    media: { type: 'carousel', images: [socnet01, socnet02, socnet03, socnet04, socnet05, socnet06] },
    description: 'We developed a Facebook-like social network featuring user profiles, followers, posts, comments, image uploads, groups, notifications, and private and group chat capabilities. I initialized the setup for the frontend (Next.js/React) and backend development, where I implemented a Go-based server with SQLite for data management and migration. I designed an entity relationship diagram (ERD) so our application can handle data consistently and efficiently. I also built the posts and comments functionality. Lastly, I deployed a multi-container Docker app to isolate the frontend from the backend environment.',
    skills: ['JavaScript', 'Go', 'Next.js', 'React', 'SQLite', 'database migration', 'ERD', 'HTTP', 'web development', 'sessions', 'cookies', 'authentication', 'authorization', 'image handling', 'API', 'Docker', 'Websockets', 'bcrypt']
  },
  {
    title: 'buy-01',
    subtitle: '// 🚧 in progress //',
    /* link: 'https://github.com/jeeeeedi/buy-01',
    media: { type: 'video', src: puppyescapemov, poster: puppyescapepng }, //TODO: add media */
    description: 'We built an e-commerce platform using Spring Boot for the backend and Angular for the frontend. Users can register as either clients or sellers, using JWT for secure authentication. I worked on setting up the microservices, MongoDB, Kafka asynchronous communication, HTTPS/SSL, cross-origin resource sharing (CORS), and multi-container Docker app.',
    skills: ['Java', 'Spring Boot', 'microservices', 'Spring Security', 'MongoDB', 'Angular', 'Kafka', 'JWT', 'HTTPS', 'SSL', 'CORS', 'Docker', 'image handling', 'API', 'CRUD', 'authentication', 'authorization', 'bcrypt', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  }
];
const hackathonProjects = [
  {
    title: 'Ålands Idrott x Consilia Data Challange',
    subtitle: 'J2 Process Optimization',
    link: 'https://www.linkedin.com/posts/grit-lab-%C3%A5land_innovation-sportsdevelopment-leadership-activity-7364641522106920960-34dW',
    media: { type: 'video', src: idrott_dashboard, poster: idrott_AttendancebyAgeGroup },
    description: 'Ålands Idrott manages sports club funding, but member and activity data is fragmented across two systems (Suomisport and Membra/Consilia), making fair, data-driven fund allocation difficult. Our objective was to build a solution to reconcile and analyze data from both systems, identify duplicates, and visualize participation statistics to support transparent, auditable funding decisions.',
    solution: `**Our solution:** We built a data-driven funding tool that automates reconciliation, analysis, and decision-making for Ålands Idrott:

  - **Data wrangling:** Fetches and deduplicates data from Membra and Suomisport APIs (simulated with thousands of fake data in JSON), reconciles records in a Go backend, and stores clean data in SQLite. Manual PDF applications are integrated via a simple input form.

  - **Process optimization:** Automatically calculates scores, allocation percentages, and suggests budgets. Provides a step-by-step workflow with decision criteria, real-time budget tracking, and notes—eliminating manual back-and-forth between forms and tables.

  - **Reconciliation method:** Members matched using first name, last name, birth date, and zip code; only registered clubs can be selected.

  - **Privacy and roles:** Names are hidden for GDPR; the prototype supports a single user.

  Our solution streamlines data handling and funding decisions while keeping the process auditable and user-friendly. At the end of the four-day hackathon, we also pitched and presented our solution to the panel of judges.`,
    skills: ['Go', 'SQLite', 'React/Next.js', 'Tailwind', 'TypeScript', 'Recharts']
  }
];

// Group projects into categories.
const categories = [
  { title: 'Personal Projects', projects: [] },
  { title: 'School Projects', projects },
  { title: 'Hackathons', projects: hackathonProjects }
];

// Render multiline text for `solution` (preserve paragraphs and line breaks)
function renderMultiline(text){
  if(!text) return null;
  // Split paragraphs (double newline). Within a paragraph, preserve single-line breaks.
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((para, pi) => {
    const lines = para.split(/\n/).map(l => l.trim());

    // If paragraph looks like a list (each line starts with '- '), render as a <ul>
    const isList = lines.every(l => l.startsWith('- '));
    if(isList){
      return (
        <ul className="solution" key={pi}>
          {lines.map((l, li) => (
            <li key={li}>{renderInline(l.replace(/^-\s+/, ''))}</li>
          ))}
        </ul>
      );
    }

    return (
      <p className="solution" key={pi}>
        {lines.map((line, li) => (
          <React.Fragment key={li}>
            {renderInline(line)}{li < lines.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
      </p>
    );
  });
}

// Simple inline formatter: handles **bold** and delegates link/url replacement to renderDescription
function renderInline(text){
  if(!text) return null;
  const parts = [];
  const boldRe = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;
  while((match = boldRe.exec(text)) !== null){
    if(match.index > lastIndex){
      parts.push(renderDescription(text.slice(lastIndex, match.index)));
    }
    parts.push(<strong key={parts.length}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }
  if(lastIndex < text.length){
    parts.push(renderDescription(text.slice(lastIndex)));
  }
  // flatten nested arrays from renderDescription
  return parts.flat().map((p, i) => typeof p === 'string' ? <span key={i}>{p}</span> : React.cloneElement(p, {key:i}));
}

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
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  // reset carousel index when project changes
  React.useEffect(() => {
    setCarouselIndex(0);
  }, [project]);

  // keyboard navigation for lightbox and carousel
  React.useEffect(() => {
    function onKey(e){
      if(lightboxOpen){
        if(e.key === 'Escape') setLightboxOpen(false);
        if(e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + project.media.images.length) % project.media.images.length);
        if(e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % project.media.images.length);
      } else if(project.media && project.media.type === 'carousel'){
        if(e.key === 'ArrowLeft') setCarouselIndex(i => (i - 1 + project.media.images.length) % project.media.images.length);
        if(e.key === 'ArrowRight') setCarouselIndex(i => (i + 1) % project.media.images.length);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, project]);

  return (
      <article className="project-card">
        <h3 className="project-title">{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a> : project.title}</h3>
        {project.subtitle && <div className="project-subtitle">{project.subtitle}</div>}

      {project.media && (
        <div className="project-media">
          {project.media.type === 'image' ? (
            <img src={project.media.src} alt={project.title} loading="lazy" />
          ) : project.media.type === 'carousel' ? (
            // Simple carousel for multiple images
            <div className="carousel" role="group" aria-label={`${project.title} images`}>
              <div className="carousel-viewport">
                <div
                  className="carousel-track"
                  style={{ width: `${project.media.images.length * 100}%`, transform: `translateX(-${carouselIndex * (100 / project.media.images.length)}%)` }}
                >
                  {project.media.images.map((img, idx) => (
                      <div className="carousel-slide" key={idx} style={{ flex: `0 0 ${100 / project.media.images.length}%` }}>
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        loading="lazy"
                        onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="carousel-prev"
                onClick={() => setCarouselIndex((carouselIndex - 1 + project.media.images.length) % project.media.images.length)}
                aria-label="Previous image"
                title="Previous"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="carousel-next"
                onClick={() => setCarouselIndex((carouselIndex + 1) % project.media.images.length)}
                aria-label="Next image"
                title="Next"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="carousel-dots">
                {project.media.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={idx === carouselIndex ? 'active' : ''}
                    onClick={() => setCarouselIndex(idx)}
                    aria-label={`Show image ${idx + 1}`}
                    title={`Show image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Lightbox / modal for expanded image */}
              {lightboxOpen && (
                <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} image viewer`}>
                  <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)} />
                  <div className="lightbox-content">
                    <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">✕</button>
                    <button className="lightbox-nav lightbox-prev" onClick={() => setLightboxIndex((lightboxIndex - 1 + project.media.images.length) % project.media.images.length)} aria-label="Previous image">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <img src={project.media.images[lightboxIndex]} alt={`${project.title} enlarged ${lightboxIndex + 1}`} />
                    <button className="lightbox-nav lightbox-next" onClick={() => setLightboxIndex((lightboxIndex + 1) % project.media.images.length)} aria-label="Next image">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
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
      {project.solution && renderMultiline(project.solution)}
      <ul className='skills'>
        {project.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
