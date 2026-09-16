const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const page = fs.readFileSync(path.join(__dirname, "index.html"));

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(page);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port ${port}`);
});
