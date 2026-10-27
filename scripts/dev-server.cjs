const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const index = process.argv.indexOf('--port');
const port = Number(index >= 0 ? process.argv[index + 1] : process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) { console.error('Invalid port'); process.exit(1); }
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2','.pdf':'application/pdf'};
const server = http.createServer((req, res) => {
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405, {Allow:'GET, HEAD'}); return res.end('Method not allowed'); }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Bad request'); }
  if (pathname.split(/[\\/]/).some(part => part.startsWith('.') || part === 'node_modules')) { res.writeHead(403); return res.end('Forbidden'); }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type':types[path.extname(file).toLowerCase()] || 'application/octet-stream','Content-Length':stat.size,'Cache-Control':'no-store'});
    if (req.method === 'HEAD') return res.end();
    const stream = fs.createReadStream(file);
    stream.on('error', () => res.destroy());
    stream.pipe(res);
  });
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? `Port ${port} is busy. Try: npm run dev -- --port ${port + 1}` : error.message);
  process.exit(1);
});
server.listen(port, '127.0.0.1', () => console.log(`\nLunara is ready: http://localhost:${port}\nPress Ctrl+C to stop.\n`));
