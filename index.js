const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("chao ban")); //route

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
