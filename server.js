const express = require("express");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

const server = express();

let isReady = false;

server.get("/ready", (req, res) => {
  if (isReady) {
    res.status(200).send("OK");
  } else {
    res.status(503).send("Not Ready");
  }
});

app.prepare().then(() => {
  console.log("⚡ Starting the server, please wait...");
  setTimeout(() => {
    isReady = true;
    server.listen(3000, () => {
      console.log("🚀 Server is ready, listening on http://localhost:3000");
    });
  }, 15000);
});

server.all("*", (req, res) => handle(req, res));
