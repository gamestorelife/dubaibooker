
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { parse } = require('querystring');
const send = require('send');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const API_KEY = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MWE4MjhjMC1iNzI0LTQwMWEtYmM3NS0wZTcxZjUzYjJjZjkiLCJVc2VySWQiOiI0NDU0MCIsIlVzZXJUeXBlIjoiQWdlbnQiLCJQYXJlbnRJRCI6IjAiLCJFbWFpbElEIjoiZHluYW1pc2NhcGl0YWx1YWVAZ21haWwuY29tIiwiaXNzIjoiaHR0cDovL3JheW5hYXBpLnJheW5hdG91cnMuY29tIiwiYXVkIjoiaHR0cDovL3JheW5hYXBpLnJheW5hdG91cnMuY29tIn0.TD-kr0ILWSyo-NTm-LE3SfnRuM_Xa5qXwxs5BgjTz8Y'; 

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
        const apiUrl = 'http://raynaapi.raynatours.com/api/Tour/tourstaticdata'; 
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
        console.error('Error making API request:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error processing POST request');
      }
    });

  } else if (req.method === 'POST' && req.url === '/form-submit') {
    // Handle form submission from newpage.html
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const requestData = JSON.parse(body);

        // Make a POST request to the API
        const apiUrl = 'http://raynaapi.raynatours.com/api/Tour/tourstaticdata';
        const response = await axios.post(apiUrl, requestData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        });

        // Redirect to tourrender.html with the selected city information in the query parameters
        const selectedCity = requestData.cityId; // Assuming cityId is present in the requestData
        const redirectUrl = `/tourrender.html?city=${encodeURIComponent(selectedCity)}`;
        res.writeHead(302, { 'Location': redirectUrl });
        res.end();
      } catch (error) {
        console.error('Error making API request:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error processing POST request');
      }
    });
  } else if (req.url === '/') {
    // Serve the newpage.html
    const htmlPath = path.join(__dirname, 'index.html');
    fs.readFile(htmlPath, 'utf-8', (err, html) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      }
    });
  } else if (req.url === '/tourrender.html') {
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
  } else  {
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

// const PORT = process.env.PORT || 3001;
// const HOST = 'www.dubaibooker.com';

// server.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});