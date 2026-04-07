const http = require('http');
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');
const base = '/jeeeeedi';
const port = process.env.PORT || 5000;

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = mime[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // Ensure requests are under the configured base path
  if (!req.url.startsWith(base)) {
    res.writeHead(302, { Location: base + '/' });
    res.end();
    return;
  }

  // Map the URL path after the base to the build folder
  let rel = req.url.slice(base.length) || '/';
  if (rel === '' || rel === '/') {
    // serve index
    sendFile(res, path.join(buildDir, 'index.html'));
    return;
  }

  const filePath = path.join(buildDir, rel);
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index for client-side routing
      sendFile(res, path.join(buildDir, 'index.html'));
      return;
    }
    sendFile(res, filePath);
  });
});

server.listen(port, () => {
  console.log(`Local server running: http://localhost:${port}${base}/`);
});
