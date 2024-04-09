
// Importowanie modułu HTTP
const http = require('http');

// Tworzenie serwera HTTP
const server = http.createServer((req, res) => {
  // Ustawienie kodu statusu odpowiedzi na 200 (Sukces) oraz nagłówków
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Wysłanie odpowiedzi - "Hello World!"
  res.end('Hello World!\n');
});

// Nasłuchiwanie na porcie 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
