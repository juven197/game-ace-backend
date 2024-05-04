const http = require("http");

const app = require("./app");
const mongoConnect = require("./service/mongo");

const server = http.createServer(app);

const PORT = 8001 || process.env.PORTS;

async function startServer() {
  await mongoConnect.mongoConnect();
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
}
startServer();
