const http = require('http');
const https = require('https');

let apiHost=
let apiPort=443;

let mySecret=
let myPort=8080;

exports.start = () => {
const server = http.createServer((req, serverRes) => {
  serverRes.setHeader('Access-Control-Allow-Origin', '*');
  console.log(`Proxying to ${apiHost}:${apiPort}${req.url}`);

  const headers=req.headers;
  // headers['accept-encoding']='identity';

  const proxyOptions = {
    protocol: 'https:',
    hostname: apiHost,
    port: apiPort,
    path: req.url,
    method: 'GET',
    headers: {
      'X-Secret': mySecret,
    },
  };

  const proxyReq=https.request(proxyOptions, (proxyRes) => {
    let proxyResponse='';
    proxyRes.on('data', (chunk) => {
      proxyResponse+=chunk;
    });
    proxyRes.on('end', () => {
      serverRes.writeHead(200);
      serverRes.end(proxyResponse);
    });
  });

  proxyReq.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  proxyReq.end();
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(process.env.PORT || myPort);
};
