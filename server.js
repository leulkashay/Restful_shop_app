const http = require("http");
const port = process.env.PORT || 7000;

const server = http.createServer();

server.listen(port);
