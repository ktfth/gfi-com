const http = require('http');
const SimplePeerServer = require('simple-peer-server');

const port = process.env.PORT || 3031;
const server = new http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (['GET', 'POST'].indexOf(req.method) > -1) {
    res.writeHead(200, headers);
    res.end('Simple peer server');
    return;
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
});

const spServer = new SimplePeerServer(server);

server.listen(port);
console.log(`Simple peer server application running on ${port}`);
