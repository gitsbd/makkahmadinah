import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'application/font-woff',
  '.woff2': 'application/font-woff2',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Parse URL
  let filePath = '.' + req.url;
  
  // Default to index.html if root
  if (filePath === './') {
    filePath = './src/pages/index.html';
  }
  
  // Remove query string
  filePath = filePath.split('?')[0];

  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Read file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`, 'utf-8');
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}/`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`\n🌐 Open your browser: http://localhost:${PORT}/src/pages/index.html\n`);
  console.log('Press Ctrl+C to stop the server\n');
});

