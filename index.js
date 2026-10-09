import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.sendFile(_dirname + "/c/Users/ATOMIC LOGISTICS SER/node/index.html")
  console.log(req.rawHeaders);
})

app.listen(3000, () => {
  console.log(`Server running on port ${port}.`);
}) 