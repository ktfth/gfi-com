const http = require('http');
const SimplePeerServer = require('simple-peer-server');

const port = process.env.PORT || 3031;
const server = new http.createServer();

const spServer = new SimplePeerServer(server);

server.listen(port);
console.log(`Simple peer server application running on ${port}`);
