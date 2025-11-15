import React from 'react';

// Helper to replace known words/URLs in text with anchors
export function renderDescription(text){
  if(!text) return null;
  const parts = [];
  let remaining = text;
  const patterns = [
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

// Inline formatting: **bold** and delegated link replacement
export function renderInline(text){
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
  return parts.flat().map((p, i) => typeof p === 'string' ? <span key={i}>{p}</span> : React.cloneElement(p, {key:i}));
}

// Multiline renderer: paragraphs, lists, and preserved line breaks
export function renderMultiline(text){
  if(!text) return null;
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((para, pi) => {
    const lines = para.split(/\n/).map(l => l.trim());
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
          <React.Fragment key={li}>{renderInline(line)}{li < lines.length - 1 ? <br/> : null}</React.Fragment>
        ))}
      </p>
    );
  });
}
