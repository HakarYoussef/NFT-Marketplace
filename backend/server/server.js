const express = require('express');
const data = require('./data.json');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
  res.send({ data });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
