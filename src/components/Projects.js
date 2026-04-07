import React from 'react';
import ReactMarkdown from 'react-markdown';
import { categories } from '../data/projectsData';

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
      const imgsLen = project && project.media && Array.isArray(project.media.images) ? project.media.images.length : 0;
      if(lightboxOpen){
        if(e.key === 'Escape') setLightboxOpen(false);
        if(imgsLen > 0){
          if(e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + imgsLen) % imgsLen);
          if(e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % imgsLen);
        }
      } else if(project && project.media && project.media.type === 'carousel' && imgsLen > 0){
        if(e.key === 'ArrowLeft') setCarouselIndex(i => (i - 1 + imgsLen) % imgsLen);
        if(e.key === 'ArrowRight') setCarouselIndex(i => (i + 1) % imgsLen);
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
                  {project.media.images.map((img, idx) => {
                    const imgSrc = typeof img === 'string' ? img : img.src;
                    const imgStyle = typeof img === 'string' ? {} : (img.style || {});
                    return (
                      <div className="carousel-slide" key={idx} style={{ flex: `0 0 ${100 / project.media.images.length}%`, ...imgStyle }}>
                        <img
                          src={imgSrc}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          loading="lazy"
                          onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                        />
                      </div>
                    );
                  })}
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

      <div className='description'>
        <ReactMarkdown components={{
          a: ({node, children, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>
        }}>{project.description || ''}</ReactMarkdown>
      </div>
      {project.solution && (
        <div className="solution">
          <ReactMarkdown components={{
            a: ({node, children, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>
          }}>{project.solution}</ReactMarkdown>
        </div>
      )}
      {Array.isArray(project.skills) && project.skills.length > 0 && (
        <ul className='skills'>
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
