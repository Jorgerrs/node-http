const http = require('http');
const data = require('./data');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
      </head>
      <body>
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p>${data.description}</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, host, () => {
  console.log(`Servidor ejecutándose en http://${host}:${port}`);
});