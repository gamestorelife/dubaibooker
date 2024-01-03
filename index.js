const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { parse } = require('querystring');

const API_KEY = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MWE4MjhjMC1iNzI0LTQwMWEtYmM3NS0wZTcxZjUzYjJjZjkiLCJVc2VySWQiOiI0NDU0MCIsIlVzZXJUeXBlIjoiQWdlbnQiLCJQYXJlbnRJRCI6IjAiLCJFbWFpbElEIjoiZHluYW1pc2NhcGl0YWx1YWVAZ21haWwuY29tIiwiaXNzIjoiaHR0cDovL3JheW5hYXBpLnJheW5hdG91cnMuY29tIiwiYXVkIjoiaHR0cDovL3JheW5hYXBpLnJheW5hdG91cnMuY29tIn0.TD-kr0ILWSyo-NTm-LE3SfnRuM_Xa5qXwxs5BgjTz8Y'; // Replace with your actual API key

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api-data') {
    // Handle POST request for API data
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const requestData = JSON.parse(body);

        // Make a POST request to the API
        const apiUrl = 'http://raynaapi.raynatours.com/api/Tour/tourstaticdata'; // Replace with the actual API endpoint
        const response = await axios.post(apiUrl, requestData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        });

        // Serve the API response as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response.data));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error processing POST request');
      }
    });
  } else if (req.url === '/') {
    // Serve the HTML file
    const htmlPath = path.join(__dirname, 'tourrender.html');
    fs.readFile(htmlPath, 'utf-8', (err, html) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      }
    });
  } else {
    // Serve other files (CSS, etc.)
    const filePath = req.url.slice(1);
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('File Not Found');
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
